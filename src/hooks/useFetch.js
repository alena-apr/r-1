import { useState, useEffect } from "react";

class HttpError extends Error {
  constructor(message, status, text) {
    super(message);
    this.status = status;
    this.text = text;
  }
}

function useFetch(url, options = {}) {
  const [state, setState] = useState({
    pending: true,
    data: null,
    error: null,
    status: null,
  });

  useEffect(() => {
    (async function request() {
      if (options.headers === undefined) {
        options.headers = {};
      }
      options.headers["Content-Type"] = "application/json";

      try {
        const response = await fetch(url);

        if (response.status < 200 || response.status >= 400) {
          throw new HttpError(
            "Status exc",
            response.status,
            await response.text()
          );
        }

        const data = await response.json();

        setState({
          pending: false,
          data: data,
          error: null,
          status: response.status,
        });
      } catch (e) {
        if (e.status < 200 || e.status >= 400) {
          setState({
            pending: false,
            data: null,
            error: e,
            status: e.status,
          });
        }

        // if (e instanceof HttpError && e.status === 401) {
        //   setState({
        //     pending: false,
        //     data: null,
        //     error: e,
        //     status: e.status,
        //   });
        // }
        console.log(e);
        throw e;
      }
    })();
  }, []);

  return state;
}

export default useFetch;
