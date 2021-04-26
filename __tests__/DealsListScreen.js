import { shallow ,mount} from 'enzyme';
import React from 'react';
import DealsListScreen from '../src/Screens/List/DealsListScreen';
import DealsList from '../src/Components/DealsList';

it("renders without crashing", () => {
    shallow(<DealsListScreen />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<DealsList />);
    const Deals = <Text>Title:</Text>;
    expect(wrapper.contains(Deals)).toEqual(true);
  });
  
  it(' renders the text inside the component', () => {
    const deals =[{ id: 1, title: "PackMan" },{ id: 2, title: "Frozen" } ];
    const wrapper = mount(
      <DealsList deals={deals} />
    );
    const p = wrapper.find('Deals');
    expect(p.text()).toBe('PackMan');
  });