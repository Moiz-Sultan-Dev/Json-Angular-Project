import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
    { id: 5, name: 'Sarah Brown', email: 'sarah@example.com' },
    { id: 6, name: 'David Wilson', email: 'david@example.com' },
    { id: 7, name: 'Laura Moore', email: 'laura@example.com' },
    { id: 8, name: 'James Taylor', email: 'james@example.com' },
    { id: 9, name: 'Linda Anderson', email: 'linda@example.com' },
    { id: 10, name: 'William Thomas', email: 'william@example.com' },
  ];

  constructor() {}

  getModifiedData() {
    return this.data.map((item) => ({
      userID: item.id,
      fullName: item.name,
      emailAddress: item.email,
    }));
  }

  getPayloadModified() {
    const modifiedData = this.getModifiedData();
    const payloadModifie = [];

    for (let i = 0; i < modifiedData.length; i++) {
      const item = modifiedData[i];
      const modifiedItem: any = {};
      for (const key in item) {
        if (key === 'userID') {
          modifiedItem[key] = item[key] + 50;
        } else if (key === 'fullName') {
          modifiedItem[key] = `${item[key]} Bhai`;
        } else if (key === 'emailAddress') {
          modifiedItem[key] = item[key].replace(
            '@example.com',
            '@modified.com'
          ); 
        }
      }
      payloadModifie.push(modifiedItem);
    }

    return payloadModifie;
  }
}
