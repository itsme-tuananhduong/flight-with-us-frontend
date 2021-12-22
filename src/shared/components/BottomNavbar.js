import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeProvider';

import './BottomNavbar.css';

const BottomNavbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'bottom-navbar dark' : 'bottom-navbar'}>
      <ul className="bottom-nav-link">
        <Link to="/">
          <li className="bottom-nav-link__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28491">
                <path
                  data-name="Rectangle 4527"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Group 28489">
                  <path
                    data-name="Path 20400"
                    d="M17.968 21H6.033a1.624 1.624 0 01-1.615-1.63V9.931a.562.562 0 111.123 0v9.439a.494.494 0 00.491.5h11.936a.494.494 0 00.491-.5V9.931a.562.562 0 111.123 0v9.439A1.624 1.624 0 0117.968 21z"
                  ></path>
                  <path
                    data-name="Path 20401"
                    d="M20.438 11.783a.558.558 0 01-.4-.166l-7-7.052a1.47 1.47 0 00-2.088 0l-7 7.052a.559.559 0 01-.8 0 .57.57 0 010-.8l7-7.052a2.59 2.59 0 013.679 0l7 7.052a.57.57 0 010 .8.558.558 0 01-.4.166z"
                  ></path>
                  <path
                    data-name="Path 20402"
                    d="M14.265 21H9.729a.567.567 0 01-.567-.567v-5.032a1.774 1.774 0 011.772-1.772h2.131a1.774 1.774 0 011.772 1.772v5.032a.567.567 0 01-.572.567zm-3.969-1.134h3.4v-4.465a.639.639 0 00-.638-.638h-2.126a.639.639 0 00-.638.638z"
                  ></path>
                </g>
              </g>
            </svg>
          </li>
        </Link>
        <li className="bottom-nav-link__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28502">
              <path
                data-name="Rectangle 4528"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Group 28501">
                <g data-name="Group 28494">
                  <g data-name="Group 28493">
                    <path
                      data-name="Path 20407"
                      d="M9.41 3h-5.1A1.313 1.313 0 003 4.311v5.1a1.313 1.313 0 001.311 1.31h5.1a1.313 1.313 0 001.31-1.311v-5.1A1.313 1.313 0 009.41 3zm0 7.078h-5.1a.668.668 0 01-.667-.668v-5.1a.668.668 0 01.668-.667h5.1a.668.668 0 01.668.668v5.1h0a.668.668 0 01-.669.667z"
                      stroke="currentColor"
                      stroke-width="0.4"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 28496">
                  <g data-name="Group 28495">
                    <path
                      data-name="Path 20408"
                      d="M19.689 3h-5.1a1.313 1.313 0 00-1.311 1.311v5.1a1.313 1.313 0 001.311 1.311h5.1A1.313 1.313 0 0021 9.411v-5.1A1.313 1.313 0 0019.689 3zm.668 6.41a.668.668 0 01-.668.668h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668z"
                      stroke="currentColor"
                      stroke-width="0.4"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 28498">
                  <g data-name="Group 28497">
                    <path
                      data-name="Path 20409"
                      d="M9.41 13.279h-5.1A1.313 1.313 0 003 14.59v5.1a1.313 1.313 0 001.311 1.311h5.1a1.313 1.313 0 001.311-1.311v-5.1a1.312 1.312 0 00-1.312-1.311zm0 7.078h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668v5.1h0a.668.668 0 01-.668.663z"
                      stroke="currentColor"
                      stroke-width="0.4"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 28500">
                  <g data-name="Group 28499">
                    <path
                      data-name="Path 20410"
                      d="M19.689 13.279h-5.1a1.313 1.313 0 00-1.311 1.311v5.1a1.313 1.313 0 001.311 1.311h5.1A1.313 1.313 0 0021 19.69v-5.1a1.313 1.313 0 00-1.311-1.311zm.668 6.41a.668.668 0 01-.668.668h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668z"
                      stroke="currentColor"
                      stroke-width="0.4"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
