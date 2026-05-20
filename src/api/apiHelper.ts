import { request } from '@playwright/test';

export class ApiHelper {

  static async getProducts() {

    const apiContext = await request.newContext();

    const response = await apiContext.get(
      'https://automationexercise.com/api/productsList'
    );

    return response;
  }
}