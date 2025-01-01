import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [CommonModule,MatFormFieldModule, MatInputModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  eventType: string = '';
  queues: string = '';
  private apiUrl = '/api/events';
  searchEventName='';
  constructor(private http: HttpClient) {}

  registerQueues() {
    const request = {
      eventType: this.eventType,
      queues: this.queues.split(',')
    };
    console.log(request)
    this.http.post(`${this.apiUrl}/register?eventName=${this.eventType}&queueNames=${this.queues}`,{})
// this.http.post(`${this.apiUrl}/register?eventName=ORDER_DELIVERED&queueNames=orderQueue,notificationQueue`,{})
    .subscribe(response => alert('Queues registered successfully!'));
  }
  findByEventName(eventName?: string) {
  //  this.http.get<Event>(`${this.apiUrl}/ORDER_DELIVERED/subscribers`).subscribe(() => console.log)
    return this.http.get<Event>(`${this.apiUrl}/${this.searchEventName}/subscribers`).subscribe(() => console.log)
  }
}