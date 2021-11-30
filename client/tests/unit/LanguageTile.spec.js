import { shallowMount, mount } from '@vue/test-utils';
import LanguageTile from '@/components/LanguageTile.vue';
import apiService from '@/services/apiService';

describe('LanguageTile Component', () => {
  const langName = 'Chinese';
  const langCode = 'zh';

  it('Tile renders correctly based on the props passed in', () => {
    const wrapper = shallowMount(LanguageTile, {
      props: { langName, langCode },
    });
    const title = wrapper.get('[data-test="language-tile-title"]');
    expect(title.text()).toBe('Chinese');
  });
  it('Should allow a name to be entered', async () => {
    const wrapper = mount(LanguageTile, {
      props: { langName, langCode },
    });
    const nameInput = wrapper.get('[data-test="name-input"]');
    await nameInput.setValue('John');
    expect(nameInput.element.value).toBe('John');
  });
  it('Form should not be submitted if nothing is entered', async () => {
    const spyApiCall = jest.spyOn(apiService, 'getNameTranslation');
    const wrapper = mount(LanguageTile, {
      props: { langName, langCode },
    });
    const submitButton = wrapper.get('[data-test="submit-button"]');
    await submitButton.trigger('click');
    expect(spyApiCall).toHaveBeenCalledTimes(0);
  });
  test('Submission of form should trigger api call with the appropriate credentials', async () => {
    const spyApiCall = jest.spyOn(apiService, 'getNameTranslation');
    const wrapper = mount(LanguageTile, {
      props: { langName, langCode },
    });
    const nameInput = wrapper.get('[data-test="name-input"]');
    await nameInput.setValue('John');
    expect(nameInput.element.value).toBe('John');

    wrapper.get('[data-test="form"]').trigger('submit');
    expect(spyApiCall).toBeCalledTimes(1);
    expect(spyApiCall).toBeCalledWith('John', 'zh');
  });
});
