import { fileUploadType } from "./fileUpload"

export interface queryApi {
  name: string,
  query_types: string[],
  documents: string[],
  description: string
}


export interface query {
  name: string,
  query_types: queryTypeInterface[],
  documents: fileUploadType[],
  description: string
}

export interface queryTypeInterface{
  id : string,
  title :  string
}