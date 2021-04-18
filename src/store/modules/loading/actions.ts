
export function showLoader(loader: Boolean) {
  return {
    type: 'SHOW_LOADER',
    payload: {
      loader
    }
  }
}

export function hideLoader(loader: Boolean) {
  return {
    type: 'HIDE_LOADER',
    payload: {
      loader
    }
  }
}


