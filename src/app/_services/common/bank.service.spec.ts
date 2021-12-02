import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { BankService } from './bank.service';

fdescribe('BankService', () => {
  let service: BankService;
  // let httpMock: HttpTestingController;
  let token: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule,
        HttpClientModule,
        AuthService,
      ],
    });
    service = TestBed.inject(BankService);
    // httpMock = TestBed.inject(HttpTestingController);


  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
