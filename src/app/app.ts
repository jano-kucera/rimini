import { AfterViewInit, Component, signal } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { RouterOutlet } from '@angular/router';
import { Calendar } from 'vanilla-calendar-pro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('rimini');

  ngAfterViewInit(): void {
    const from = '2026-07-26';
    const to = '2026-08-02';
    const calendar = new Calendar("#calendar", {
      dateMin: from,
      dateMax: to,
      displayDisabledDates: false,
      disableAllDates: true,
      locale: 'sk-SK',
      selectedMonth: 6,
      selectedWeekends: [],
      selectedTheme: "light",
      selectionDatesMode: "multiple-ranged",
      selectedDates: [from, to],
      type: 'default',
    });

    calendar.init();
  }
}
