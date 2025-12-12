import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SmtpSettingsService } from '../../services/smtp-settings.service';

@Component({
  selector: 'app-smtp-settings',
  imports: [NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './smtp-settings.component.html',
  styleUrl: './smtp-settings.component.scss'
})
export class SmtpSettingsComponent implements OnInit {
  smtpSettingsForm!: FormGroup;
  enableSmtpSettings: boolean = false;
  enableAuthentication: boolean = false;
  enableSsl: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: NgToastService,
    private smtpSettingsService: SmtpSettingsService) {

  }

  ngOnInit(): void {

  }
}
