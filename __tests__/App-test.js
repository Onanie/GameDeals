/**
 * @format
 */

import 'react-native';
import * as React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import { configure } from 'enzyme'
import App from '../App';
import TestRenderer from 'react-test-renderer'; 
import {create, act} from 'react-test-renderer';
jest.mock("axios");
import DealsListScreen from '../src/Screens/List/DealsListScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';



it("search for a deal by deal name", () => {
  const resp = {
    data: [{ title: "PacMan" },{title:"delux"}, { title: "Frozen" },{title:"Snake"}],
  };
  axios.get.mockResolvedValue(resp);
  const { getByPlaceholder } = renderer(<DealsListScreen />);
  fireEvent.changeText(getByPlaceholder("Search Deals by name"), "delux");
  expect(getAllByText("delux")).toHaveLength(1);
});

