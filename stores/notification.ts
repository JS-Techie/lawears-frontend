import {create} from 'zustand';

interface NotificationState {
  notification: any;
  setNotification: (notification: any) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notification: null,
  setNotification: (notification) => set({ notification }),
}));