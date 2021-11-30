import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App Component', () => {
  it('Main page renders correctly', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch('Find your name in another language!');
  });
  it('Renders child components with correct titles', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toMatch('Chinese');
    expect(wrapper.text()).toMatch('Japanese');
    expect(wrapper.text()).toMatch('Korean');
    expect(wrapper.text()).toMatch('Russian');
    expect(wrapper.text()).toMatch('Georgian');
    expect(wrapper.text()).toMatch('Sinhalese');
  });
});
