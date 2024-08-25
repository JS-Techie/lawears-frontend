import { create } from "zustand";
import { query } from "@/interfaces/query";

interface queryStore {
  query: query
  addQuery: (query : query) => void
}

export const useQueryStore = create<queryStore>((set) => ({
  query: {
    name: '',
    query_types: [],
    documents: [],
    description: ''
  },
  addQuery: ((query : query) => set((state: any) => ({query : query})))
}))