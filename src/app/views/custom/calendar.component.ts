import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { CalendarEvent, CalendarWeekViewComponent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Router } from '@angular/router';
import {
    isSameMonth,
    isSameDay,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    startOfDay,
    endOfDay,
    format,
    addDays,
    subDays,
    addHours
} from 'date-fns';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';


interface Film {
    id: number;
    title: string;
    release_date: string;
}
var visible: false;
var visibleDebug: false;


@Component({
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {

    radioModel: string = 'Month';

    activeDayIsOpen: boolean = false;

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';

    viewDate: Date = new Date();

    modalData: {
        action: string;
        event: CalendarEvent;
    };

    color =  {
        red: {
            primary: '#ad2121',
            secondary: '#FAE3E3'
        },
        blue: {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
        },
        yellow: {
            primary: '#e3bc08',
            secondary: '#FDF1BA'
        }
    }

    actions: any[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [
        {
            start: subDays(startOfDay(new Date()), 1),
            end: addDays(new Date(), 1),
            title: 'A 3 day event',
            color: this.color.red,
            actions: this.actions
        },
        {
            start: startOfDay(new Date()),
            title: 'An event with no end date',
            color: this.color.yellow,
            actions: this.actions
        },
        {
            start: subDays(endOfMonth(new Date()), 3),
            end: addDays(endOfMonth(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: this.color.blue
        },
        {
            start: addHours(startOfDay(new Date()), 2),
            end: new Date(),
            title: 'A draggable and resizable event',
            color: this.color.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            draggable: true
        }
    ];

    events$: Observable<Array<CalendarEvent<{ film: Film }>>>;


    form: FormGroup;
    detail: AbstractControl;
    latePassAmount: string;
    constructor(private http: HttpClient, private modal: NgbModal, private fb: FormBuilder) {

        this.form = fb.group({
            'detail': ['', Validators.required],
        });
        this.detail = this.form.controls['detail'];

        this.latePassAmount = (3).toString(); // Set late pass amount to this variable!
     }

    sendMessage(): void {
        console.log(this.detail.value);
        // Don't forget to change the latePassAmount in constructor to update to firebase^^^
        
        // Insert Firebase Here
    }
    ngOnInit(): void {
        this.fetchEvents();
    }

    fetchEvents(): void {
        const getStart: any = {
            month: startOfMonth,
            week: startOfWeek,
            day: startOfDay
        }[this.view];

        const getEnd: any = {
            month: endOfMonth,
            week: endOfWeek,
            day: endOfDay
        }[this.view];

        const params = new HttpParams()
            .set(
                'primary_release_date.gte',
                format(getStart(this.viewDate), 'YYYY-MM-DD')
            )
            .set(
                'primary_release_date.lte',
                format(getEnd(this.viewDate), 'YYYY-MM-DD')
            )
            .set('api_key', '0ec33936a68018857d727958dca1424f');

        this.events$ = this.http
            .get('https://api.themoviedb.org/3/discover/movie', { params })
            .pipe(
                map(({ results }: { results: Film[] }) => {
                    return results.map((film: Film) => {
                        return {
                            title: film.title,
                            start: new Date(film.release_date),
                            // color: this.color.yellow,
                            meta: {
                                film
                            }
                        };
                    });
                })
            );
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
        this.events.push({
            title: 'New event',
            start: startOfDay(new Date()),
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            color: this.color.blue
        });
        this.refresh.next();
    }


    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    // convert Hex to RGBA
    public convertHex(hex: string, opacity: number) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    }

    public random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /*ngOnInit(): void {
      // generate random values for mainChart
      for (let i = 0; i <= this.mainChartElements; i++) {
        this.mainChartData1.push(this.random(50, 200));
        this.mainChartData2.push(this.random(80, 100));
        this.mainChartData3.push(65);
      }
    }*/

}
