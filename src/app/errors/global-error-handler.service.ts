import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LogerErrorService } from './loger-error.service';
import { CommonErrorsService } from './common-errors.service';
import { NotificationErrorsService } from './notifications-errors.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {

    const errorService = this.injector.get(CommonErrorsService);
    const logger = this.injector.get(LogerErrorService);
    const notifier = this.injector.get(NotificationErrorsService);

    let message: any;
    let stackTrace: any;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      notifier.showError(message);
    }

    // Always log errors
    logger.logError(message, stackTrace);

    console.error(error);
  }
}
