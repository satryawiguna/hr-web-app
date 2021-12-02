import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './../../_state/auth/auth.state';
import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  // let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule,
        HttpClientModule,
        NgxsModule.forRoot([AuthState]),
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    // httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should login success', (done: DoneFn) => {
    service
      .login({ identity: 'admin.developer', password: '12345' })
      .subscribe((res: any) => {
        expect(res.status).toBe(200);
        done();
      });

    // const req = httpMock.expectOne(BaseUrl + '/login');
    // expect(req.request.method).toBe('POST');
    // req.flush({ status: 200 });
  }, 60000);

  fit('should login error with false password', (done: DoneFn) => {
    service.login({ identity: 'admin.developer', password: 'abcd' }).subscribe(
      () => { },
      (err: any) => {
        expect(err.status).toBe(401);
        done();
      }
    );

    // const req = httpMock.expectOne(BaseUrl + '/login');
    // expect(req.request.method).toBe('POST');
    // req.flush({ status: 401 });
  }, 60000);

  fit('should login error with false identity', (done: DoneFn) => {
    service.login({ identity: 'admindev', password: '12345' }).subscribe(
      () => { },
      (err: any) => {
        expect(err.status).toBe(500);
        done();
      }
    );

    // const req = httpMock.expectOne(BaseUrl + '/login');
    // expect(req.request.method).toBe('POST');
    // req.flush({ status: 500 });
  }, 60000);
});
