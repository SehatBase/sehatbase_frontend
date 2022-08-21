import { navItems } from "../components/Navbar";

export const hrefToText = (href) => navItems.links.filter(link => link.href === href)[0]?.text;
export const textToHref = (text) => navItems.links.filter(link => link.text === text)[0]?.href; 
