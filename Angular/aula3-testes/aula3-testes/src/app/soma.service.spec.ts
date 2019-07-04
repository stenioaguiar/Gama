import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let httpMock: HttpTestingController = null;

describe('SomaService', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({
    imports :[
      HttpClientTestingModule,
    ]
  }));
  
  beforeEach(()=>{
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar 7', () => {
    const service: SomaService = TestBed.get(SomaService);

    expect(service.soma(2,5)).toBe(7);
  });

  it('deve receber todos', ()=> {
    const service = TestBed.get(SomaService);
    const fakeData = [
      { title: 'Title 1', description: 'Desc 1' },
      { title: 'Title 2', description: 'Desc 2' },
    ];

    service.getTodos().subscribe(v => {
      console.log(v);
      expect(v.length).toBe(2);
      expect(v[0].date).toBeUndefined();
      expect(v[1].title).toBe('Title 2');
    });

    const req = httpMock.expectOne('http://localhost:3000');
    expect(req.request.method).toBe('GET');
    req.flush(fakeData);
  });
});
