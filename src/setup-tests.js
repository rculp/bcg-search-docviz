// Doesn't need to be imported. Enzyme looks for this file in /src automatically.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });