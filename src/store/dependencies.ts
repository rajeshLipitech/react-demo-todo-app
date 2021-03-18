import { ajax } from "rxjs/ajax";

const location = window.location;

export interface EpicDependencies {
  ajax: typeof ajax;
  localStorage: Storage;
  location: { href: string };
}

const dependencies: EpicDependencies = {
  ajax,
  localStorage,
  location,
};

export default dependencies;
