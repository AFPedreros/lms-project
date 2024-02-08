type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  sunOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Sun Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4 12H2m20 0h-2m-.222-7.777l-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302l-2.222 2.222m15.556-.001l-2.222-2.222"
        />
      </g>
    </svg>
  ),
  moonOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Moon Outline Icon</title>
      <path
        fill="currentColor"
        d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505zM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5zM12 2.75a.384.384 0 0 1-.268-.118a.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082a.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"
      />
    </svg>
  ),
  loginOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Login Outline Icon</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinejoin="round"
          d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"
        />
        <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" />
      </g>
    </svg>
  ),
  searchOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Search Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11.5" cy="11.5" r="9.5" />
        <path strokeLinecap="round" d="M18.5 18.5L22 22" />
      </g>
    </svg>
  ),
  telescopeOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Telescope Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinejoin="round"
          d="m12.243 6.184l-3.684 2.09c-.831.472-1.247.708-1.355 1.112c-.108.404.134.816.618 1.64l.595 1.015c.472.802.707 1.203 1.103 1.309c.396.106.8-.124 1.61-.583l3.735-2.12m-7.809-.924l-3.632 2.061c-.857.486-1.285.73-1.397 1.142c-.113.412.135.833.629 1.675c.494.841.741 1.262 1.161 1.373c.42.11.848-.133 1.704-.619l3.633-2.062m12.19-8.108l-1.049-1.786c-.494-.841-.741-1.262-1.16-1.373c-.42-.11-.848.133-1.705.619l-3.683 2.09c-.832.472-1.247.708-1.355 1.112c-.109.405.133.817.617 1.64l1.12 1.908c.471.802.707 1.203 1.103 1.309c.396.106.8-.124 1.609-.583l3.735-2.12c.857-.486 1.285-.729 1.397-1.141c.113-.413-.135-.833-.629-1.675Z"
        />
        <path strokeLinecap="round" d="m12 12.5l4 9.5m-4-9.5L8 22" />
      </g>
    </svg>
  ),
  routeOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Route Outline Icon</title>
      <g fill="none">
        <path
          fill="currentColor"
          d="m20 19l.53.53a.75.75 0 0 0 0-1.06zM8 4.25a.75.75 0 0 0 0 1.5zm10.53 12.22a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zM20 18.25H7.5v1.5H20zm-12.5-5.5h9v-1.5h-9zm9-8.5H8v1.5h8.5zm4.03 14.22l-2-2l-1.06 1.06l2 2zm-1.06 0l-2 2l1.06 1.06l2-2zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25z"
        />
        <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  ),
  homeOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Home Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725z" />
        <path strokeLinecap="round" d="M12 15v3" />
      </g>
    </svg>
  ),
  videoOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Video Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z" />
      </g>
    </svg>
  ),
  addOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Add Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
      </g>
    </svg>
  ),
  adminOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Admin Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" />
        <circle cx="12" cy="9" r="2" />
        <path d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z" />
      </g>
    </svg>
  ),
  circleArrowLeftOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Circle Arrow Left Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m13.5 9l-3 3l3 3"
        />
      </g>
    </svg>
  ),
  checkListOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Check List Outline Icon</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"
        />
        <path strokeLinecap="round" d="M13 9h5m-5 7h5" />
      </g>
    </svg>
  ),
  bookOutline: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <title>Book Outline Icon</title>
      <g fill="none">
        <path
          fill="currentColor"
          d="m16.557 6.022l-.037-.75zM14.7 6.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 6.06l-.055.748zM9 6.271l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 14.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 14.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V7.497h-1.5v5.414zm12 0V7.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.193 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.751 2.002-.926zM7.432 6.81c.5.037 1.007.097 1.39.19l.356-1.457c-.505-.123-1.11-.19-1.636-.229zm1.39.19c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.322-1.713-.861-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.189l-.112-1.496c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.341.341 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.348.348 0 0 1-.333.008l-.697 1.328a1.848 1.848 0 0 0 1.782-.037zm-5.396.876c0-.427.333-.714.682-.688l.11-1.496c-1.294-.095-2.292.962-2.292 2.184z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M12 7.585V16M2 9c0-3.771 0-5.657 1.172-6.828C4.343 1 6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172C22 3.343 22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13z"
        />
      </g>
    </svg>
  ),
};
