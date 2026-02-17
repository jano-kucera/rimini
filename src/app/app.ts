import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from 'vanilla-calendar-pro';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  imports: [ClipboardModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('rimini');

  readonly IBAN = "SK17 1100 0000 0029 1563 5898";

  copied = signal(false);

  copyIban(): void {
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }

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
