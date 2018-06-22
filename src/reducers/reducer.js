// Initialize a default state
var defaultState = {
  toggle_default: true,
  toggle_home: false,
  toggle_about: false,
  toggle_contact: false,
  toggle_hobbies: false,
  toggle_portfolio: false
};

// Initialize a default reducer function, passing into it the default state
export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_DEFAULT':
      return {...state,
        toggle_default: !state.toggle_default
      }
    case 'TOGGLE_HOME':
      return {...state,
        toggle_home: !state.toggle_home
      }
    case 'TOGGLE_ABOUT':
      return {...state,
        toggle_about: !state.toggle_about
      }
    case 'TOGGLE_CONTACT':
      return {...state,
        toggle_contact: !state.toggle_contact
      }
    case 'TOGGLE_HOBBIES':
      return {...state,
        toggle_hobbies: !state.toggle_hobbies
      }
    case 'TOGGLE_PORTFOLIO':
      return {...state,
        toggle_portfolio: !state.toggle_portfolio
      }
    default:
      return state;
  }
}
