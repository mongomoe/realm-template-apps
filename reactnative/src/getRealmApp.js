import Realm from 'realm';
import {appId} from '../realm';

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  return new Realm.App(appId);
}
