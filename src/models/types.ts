export type AuthProviderValue = {
	token: string,
	onLogin: (token: string) => void,
	onLogout: () => void,
}

export type AuthContextType = AuthProviderValue;

export type NavItem = {
	name: string,
	path: string,
}

export interface UserData {
  _id: string;
  fullName: string;
  login: string;
  createdAt: string;
  updatedAt: string;
  token: string;
  __v: number;
}

export interface LoginData {
  login: string;
  password: string;
}

export type SubmitType = (data: LoginData) => void;

export interface ButtonProps {
	classList?: string;
	size?: string;
}

export type NavigationEntity = {
	id: number;
	link: string,
	icon: string,
	text: string
}

export type AlbumEntity = {
	id: number,
	image: string,
	name: string,
	executor: string,
	tracks: number,
	likes: number
}

export type TrackEntity = {
	id: number,
	name: string,
	image: string,
	executor: string,
	album: string,
	year: number,
	duration: string
}