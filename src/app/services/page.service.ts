import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPage, IPageContent } from '../models/page.model';
import { errorHandler } from '../utility';
import { Color } from '../utility/enums/color.enum ';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private data: IPage[] = [];
  private detail: IPage = null;
  dataChanged = new Subject<IPage[]>();
  detailChanged = new Subject<IPage>();
  url: string = environment.apiUrl + '/page';
  constructor(private http: HttpClient, private alertService: AlertService) {}

  // load brands
  loadData(): Observable<IPage[]> {
    return this.http.get<IPage[]>(this.url).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: IPage[]) => {
        this.data = response;
        this.dataChanged.next(this.data.slice());
      })
    );
  }

  // load page by name
  getPageBySlug(slug: string): Observable<IPage> {
    return this.http.get<IPage>(`${this.url}/${slug}`).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: IPage) => {
        this.detail = response;
        this.detailChanged.next(this.detail);
      })
    );
  }

  // get data by id
  gePageById(id: string): Observable<IPage> {
    return this.http.get<IPage>(this.url).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: IPage) => {
        this.detail = response;
        this.detailChanged.next(this.detail);
      })
    );
  }

  // add
  addPage(page: IPage) {
    return this.http.post(this.url, page).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: IPage) => {
        this.data.push(response);
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: page.title + ' add successfully',
          color: Color.success,
        });
      })
    );
  }

  // update page
  updatePage(excerpt: string, id: string) {
    return this.http.put(this.url + '/update/' + id, { excerpt: excerpt }).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: IPage) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: 'Excerpt updated successfully',
          color: Color.success,
        });
      })
    );
  }

  /**
   * Add page content
   * @param content
   * @param id
   * @param contentId
   * @returns
   */
  addPageContent(content: IPageContent, id: string, contentId?: string) {
    const formdata = new FormData();
    formdata.append('title', content.title);
    formdata.append('description', content.description);
    formdata.append('image', content.image);

    if (contentId) {
      return this.http
        .post(`${this.url}/${id}/content/${contentId}`, formdata)
        .pipe(
          catchError((error) => errorHandler(error, this.alertService)),
          tap((response: IPage) => {
            this.detail = response;
            this.detailChanged.next(this.detail);
            this.alertService.alertShow({
              message: 'content added updated successfully',
              color: Color.success,
            });
          })
        );
    } else {
      return this.http.post(`${this.url}/${id}/content`, formdata).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: IPage) => {
          console.log('re', response);
          this.detail = response;
          this.detailChanged.next(this.detail);
          this.alertService.alertShow({
            message: 'content added updated successfully',
            color: Color.success,
          });
        })
      );
    }
  }

  /**
   * Delete content item
   * @param id
   * @param contentId
   * @returns
   */
  deleteContentItem(id: string, contentId: string) {
    const confirm = window.confirm('Are you sure you want to delete page.');
    if (!confirm) return new Observable();
    return this.http
      .delete<IPage>(`${this.url}/${id}/content/${contentId}`)
      .pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: any) => {
          // content
          const contentIndex = this.detail.content.findIndex(
            (x) => x.id === contentId
          );
          this.detail.content.splice(contentIndex, 1);
          this.dataChanged.next(this.data.slice());
          this.alertService.alertShow({
            message: 'Page content deleted successfully',
            color: Color.danger,
          });
        })
      );
  }

  // delete brand

  deleteItem(id: string) {
    const confirm = window.confirm('Are you sure you want to delete page.');
    if (!confirm) return new Observable();
    return this.http.delete<IPage>(this.url + '/' + id).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data.splice(index, 1);
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: 'Page deleted successfully',
          color: Color.danger,
        });
      })
    );
  }

  // delete brand

  activeInactiveItem(id: string, query: string): Observable<IPage> {
    return this.http.put(`${this.url}/${id}?status=${query}`, null).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: `Page ${
            query == 'active' ? 'activated' : 'inactived'
          } successfully`,
          color: Color.success,
        });
      })
    );
  }

  uploadHero(file: File, id: string): Observable<IPage> {
    const formdata = new FormData();
    formdata.append('image', file);
    return this.http.put(`${this.url}/upload/${id}`, formdata).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: `Page image uploaded successfully`,
          color: Color.success,
        });
      })
    );
  }

  // pblish
  publishPage(id: string): Observable<IPage> {
    return this.http.put(`${this.url}/publish/${id}`, null).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: `Page published successfully`,
          color: Color.success,
        });
      })
    );
  }
}
