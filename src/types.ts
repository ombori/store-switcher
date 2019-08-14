export interface AndroidAppMetaData extends StringRecord {
  appId: string;
}

export interface AppleAppMetaData extends StringRecord {
  developerId: string;
  appId: string;
}

export interface StringRecord {
  [key: string]: string;
}
