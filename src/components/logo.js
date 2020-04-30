import * as React from "react"

function SvgLogo(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 465 710" fill="none" {...props}>
      <rect x={5} y={666} width={458} height={44} rx={22} fill="#565656" />
      <path
        d="M48 561c0-13.807 11.193-25 25-25h321c13.807 0 25 11.193 25 25v105H48V561z"
        fill="#6B6A6A"
      />
      <path
        d="M48 561c0-13.807 11.193-25 25-25h102c7.18 0 13 5.82 13 13s-5.82 13-13 13H48v-1zM48 562h128v79H48z"
        fill="#787878"
      />
      <path
        d="M48 588h162c7.18 0 13 5.82 13 13s-5.82 13-13 13H48v-26zM48 640h147c7.18 0 13 5.82 13 13s-5.82 13-13 13H48v-26z"
        fill="#787878"
      />
      <rect x={109} y={562} width={114} height={26} rx={13} fill="#6B6A6A" />
      <rect x={136} y={614} width={138} height={26} rx={13} fill="#6B6A6A" />
      <path
        d="M95.676 604.816l22.886 10.864c1.29.609 2.192 1.218 2.708 1.828.515.586.773 1.301.773 2.144 0 .985-.305 1.782-.914 2.391s-1.418.914-2.426.914c-.422 0-.891-.07-1.406-.211-.492-.141-1.102-.375-1.828-.703l-27.703-12.762a8.37 8.37 0 00-.668-.281c-2.485-1.148-3.727-2.496-3.727-4.043 0-1.57 1.3-2.953 3.902-4.148l.282-.176 27.914-13.008c.937-.422 1.629-.691 2.074-.809.445-.14.832-.211 1.16-.211 1.008 0 1.817.305 2.426.915.609.609.914 1.406.914 2.39 0 .844-.27 1.582-.809 2.215-.515.609-1.406 1.219-2.672 1.828l-22.886 10.863zm62.191-18.351c.469-.844.949-1.442 1.442-1.793.492-.352 1.113-.527 1.863-.527 1.148 0 1.957.304 2.426.914.492.609.738 1.652.738 3.129l.07 9.14c0 1.617-.269 2.707-.808 3.27-.516.562-1.465.843-2.848.843-.984 0-1.746-.234-2.285-.703-.516-.468-.961-1.336-1.336-2.601-.609-2.227-1.582-3.821-2.918-4.782-1.336-.984-3.188-1.476-5.555-1.476-3.609 0-6.375 1.219-8.297 3.656-1.921 2.438-2.882 5.965-2.882 10.582 0 4.594.972 8.121 2.918 10.582 1.945 2.461 4.722 3.692 8.332 3.692 2.461 0 5.168-.821 8.121-2.461 2.976-1.641 4.851-2.461 5.625-2.461.914 0 1.675.386 2.285 1.16.633.773.949 1.734.949 2.883 0 2.062-1.816 4.008-5.449 5.836-3.633 1.828-7.723 2.742-12.27 2.742-6.14 0-11.109-2.028-14.906-6.082-3.797-4.055-5.695-9.352-5.695-15.891 0-6.305 1.922-11.543 5.765-15.715 3.844-4.172 8.719-6.257 14.625-6.257 1.664 0 3.305.187 4.922.562 1.617.375 3.34.961 5.168 1.758zm32.203 14.695c-2.742 0-5.004.902-6.785 2.707-1.758 1.781-2.637 4.067-2.637 6.856 0 2.812.879 5.144 2.637 6.996 1.781 1.828 4.043 2.742 6.785 2.742s5.004-.914 6.785-2.742c1.782-1.852 2.672-4.184 2.672-6.996 0-2.789-.89-5.075-2.672-6.856-1.757-1.805-4.019-2.707-6.785-2.707zm0-7.418c5.696 0 10.313 1.594 13.852 4.781 3.539 3.188 5.308 7.278 5.308 12.27 0 5.016-1.769 9.117-5.308 12.305-3.539 3.187-8.156 4.781-13.852 4.781-5.672 0-10.277-1.594-13.816-4.781-3.539-3.188-5.309-7.289-5.309-12.305 0-4.992 1.77-9.082 5.309-12.27 3.562-3.187 8.168-4.781 13.816-4.781zm58.219 25.559h.598c1.265 0 2.215.328 2.847.984.633.633.95 1.57.95 2.813 0 1.382-.34 2.379-1.02 2.988-.656.609-1.781.914-3.375.914h-5.379c-.68 0-1.207-.129-1.582-.387-.351-.281-.527-.656-.527-1.125v-2.461c-1.149 1.571-2.625 2.778-4.43 3.621-1.805.821-3.832 1.231-6.082 1.231-4.594 0-8.437-1.559-11.531-4.676-3.094-3.141-4.641-7.055-4.641-11.742 0-4.875 1.559-8.918 4.676-12.129 3.141-3.211 7.125-4.816 11.953-4.816 1.664 0 3.281.281 4.852.843a14.99 14.99 0 014.359 2.321v-8.895h-4.676c-1.617 0-2.765-.305-3.445-.914-.68-.633-1.02-1.629-1.02-2.988 0-1.383.34-2.379 1.02-2.988.68-.61 1.828-.915 3.445-.915h10.934c.797 0 1.336.165 1.617.493.305.328.457.937.457 1.828v36zm-16.488-17.297c-2.297 0-4.207.867-5.731 2.601-1.5 1.711-2.25 3.891-2.25 6.54 0 2.718.75 4.945 2.25 6.679 1.5 1.711 3.41 2.567 5.731 2.567 2.32 0 4.23-.868 5.73-2.602 1.524-1.734 2.285-3.949 2.285-6.644 0-2.625-.761-4.805-2.285-6.54-1.523-1.734-3.433-2.601-5.73-2.601zm35.191 10.828c.61 2.602 1.781 4.547 3.516 5.836 1.758 1.289 4.09 1.934 6.996 1.934 2.906 0 5.777-.704 8.613-2.11 2.836-1.43 4.547-2.144 5.133-2.144.867 0 1.57.328 2.109.984.563.633.844 1.453.844 2.461 0 2.203-1.629 4.102-4.887 5.695-3.257 1.594-7.289 2.391-12.093 2.391-5.672 0-10.289-1.594-13.852-4.781-3.539-3.188-5.309-7.289-5.309-12.305 0-4.992 1.77-9.082 5.309-12.27 3.563-3.187 8.18-4.781 13.852-4.781 5.062 0 9.257 1.5 12.586 4.5 3.328 2.977 4.992 6.633 4.992 10.969 0 1.383-.34 2.332-1.02 2.848-.656.515-2.027.773-4.113.773h-22.676zm18.949-5.484c-.398-2.18-1.429-3.868-3.093-5.063-1.641-1.195-3.786-1.793-6.434-1.793-2.555 0-4.617.574-6.187 1.723-1.547 1.125-2.625 2.836-3.235 5.133h18.949zM334 583.301l-20.602 44.121c-.632 1.383-1.218 2.344-1.757 2.883-.539.539-1.172.808-1.899.808a4.474 4.474 0 01-2.883-1.019c-.82-.68-1.23-1.524-1.23-2.532 0-.679.316-1.734.949-3.164l.07-.14 20.567-44.051c.656-1.43 1.254-2.414 1.793-2.953.539-.539 1.172-.809 1.898-.809 1.055 0 2.004.34 2.848 1.02.844.68 1.266 1.523 1.266 2.531 0 .422-.071.867-.211 1.336-.141.469-.411 1.125-.809 1.969zm37.055 21.515l-22.922-10.863c-1.242-.609-2.133-1.219-2.672-1.828-.516-.633-.773-1.371-.773-2.215 0-.984.292-1.781.878-2.39.586-.61 1.372-.915 2.356-.915.375 0 .797.071 1.266.211.492.141 1.183.411 2.074.809l27.843 13.008.282.176c2.601 1.195 3.902 2.578 3.902 4.148 0 1.57-1.254 2.918-3.762 4.043a3.068 3.068 0 01-.562.281l-27.809 12.762c-.703.328-1.312.562-1.828.703a5.105 5.105 0 01-1.406.211c-.984 0-1.77-.293-2.356-.879-.586-.609-.878-1.418-.878-2.426 0-.843.246-1.558.738-2.144.515-.61 1.418-1.219 2.707-1.828l22.922-10.864z"
        fill="#fff"
      />
      <path
        d="M326 183c0-9.389 7.611-17 17-17h58c9.389 0 17 7.611 17 17s-7.611 17-17 17h-58c-9.389 0-17-7.611-17-17z"
        fill="#F3AF01"
      />
      <path
        d="M291.963 352.775a107.313 107.313 0 0039.584 17.729 106.513 106.513 0 0043.257.554 107.221 107.221 0 0040.008-16.71c12.091-8.25 22.416-18.896 30.355-31.299a110.822 110.822 0 0015.847-40.88 111.492 111.492 0 00-1.2-43.919 110.644 110.644 0 00-18.053-39.929c-8.604-11.939-19.495-21.99-32.018-29.549l-16.573 28.323a76.149 76.149 0 0122.413 20.684 77.46 77.46 0 0112.637 27.951 78.065 78.065 0 01.84 30.743 77.577 77.577 0 01-11.093 28.616 76.308 76.308 0 01-21.249 21.909 75.05 75.05 0 01-28.005 11.697 74.553 74.553 0 01-30.28-.387 75.144 75.144 0 01-27.709-12.411l-18.761 26.878zM137 181c0-9.389-7.611-17-17-17H62c-9.389 0-17 7.611-17 17s7.611 17 17 17h58c9.389 0 17-7.611 17-17z"
        fill="#F3AF01"
      />
      <path
        d="M171.037 350.775a107.313 107.313 0 01-39.584 17.729 106.512 106.512 0 01-43.257.554 107.214 107.214 0 01-40.008-16.71c-12.09-8.25-22.416-18.896-30.355-31.299a110.83 110.83 0 01-15.847-40.88 111.505 111.505 0 011.2-43.919 110.647 110.647 0 0118.053-39.929c8.604-11.939 19.495-21.99 32.018-29.549l16.573 28.323a76.155 76.155 0 00-22.413 20.684A77.457 77.457 0 0034.78 243.73a78.052 78.052 0 00-.84 30.743 77.58 77.58 0 0011.093 28.616 76.318 76.318 0 0021.249 21.909 75.046 75.046 0 0028.005 11.697 74.55 74.55 0 0030.28-.387 75.144 75.144 0 0027.709-12.411l18.761 26.878z"
        fill="#F3AF01"
      />
      <path
        d="M77 130h314a367.701 367.701 0 01-33.153 152.583L297.453 415H170.547l-60.394-132.417A367.7 367.7 0 0177 130zM165 427h69v97h-69l.971-1.051c25.125-27.198 24.7-69.265-.971-95.949zM303 427h-69v97h69l-.971-1.051c-25.125-27.198-24.7-69.265.971-95.949z"
        fill="#F3C10F"
      />
      <path
        d="M93 523c0-13.807 11.193-25 25-25h232c13.807 0 25 11.193 25 25v13H93v-13z"
        fill="#F3AF01"
      />
      <rect x={148} y={408} width={172} height={39} rx={19.5} fill="#F3AF01" />
      <rect x={60} y={101} width={348} height={39} rx={19.5} fill="#F3AF01" />
      <path
        d="M154 140h44.814c13.807 0 25 11.193 25 25v3.6c0 13.807-11.193 25-25 25H154V140z"
        fill="#FFCF54"
      />
      <path
        d="M77 140h109v268h-18.5l-61.669-135.262A319.982 319.982 0 0177 140z"
        fill="#FFCF54"
      />
      <path
        d="M171.5 247.2h64.018c13.807 0 25 11.193 25 25v3.6c0 13.807-11.193 25-25 25H171.5v-53.6zM173 354.4h46.788c13.807 0 25 11.193 25 25v3.6c0 13.807-11.193 25-25 25H173v-53.6z"
        fill="#FFCF54"
      />
      <path
        d="M140.969 218.6c0-13.807 11.193-25 25-25h69.549c13.807 0 25 11.193 25 25v3.6c0 13.807-11.193 25-25 25h-69.549c-13.807 0-25-11.193-25-25v-3.6zM169.283 325.8c0-13.807 11.193-25 25-25H289c13.807 0 25 11.193 25 25v3.6c0 13.807-11.193 25-25 25h-94.717c-13.807 0-25-11.193-25-25v-3.6z"
        fill="#F3C10F"
      />
      <path
        d="M77.13 140h313.736l-.463 10.911V151H77.598l-.468-11z"
        fill="#757575"
        fillOpacity={0.38}
      />
      <path
        d="M23.055 47.243c1.732 1.117 2.928 2.415 3.589 3.897.66 1.48.99 4.033.99 7.656v5.059c0 2.255.183 3.668.548 4.238.387.592 1.105.991 2.153 1.196.25.068.627.137 1.128.205 2.575.388 3.862 1.652 3.862 3.794 0 1.048-.376 1.891-1.128 2.53-.752.637-1.754.956-3.008.956-1.595 0-3.144-.262-4.648-.786-1.481-.524-2.712-1.242-3.691-2.153-1.071-.98-1.835-2.244-2.29-3.794-.433-1.55-.65-4.204-.65-7.964v-3.965c0-4.101-1.891-6.46-5.674-7.075a1.446 1.446 0 00-.341-.068c-1.094-.183-1.903-.57-2.427-1.162-.524-.593-.786-1.447-.786-2.564 0-.98.216-1.754.65-2.324.455-.57 1.173-.98 2.152-1.23.433-.137 1.06-.285 1.88-.445 3.03-.57 4.546-2.825 4.546-6.767v-4.068c0-3.486.171-5.924.513-7.314.342-1.413.923-2.643 1.743-3.692.957-1.162 2.233-2.062 3.828-2.7 1.618-.66 3.395-.991 5.332-.991 1.208 0 2.176.319 2.905.957.73.615 1.094 1.436 1.094 2.46 0 2.143-1.378 3.43-4.136 3.863-.25.023-.433.046-.546.069-1.14.182-1.926.603-2.359 1.264-.433.638-.65 2.108-.65 4.41v5.024c0 3.418-.341 5.924-1.025 7.52-.683 1.594-1.868 2.916-3.554 3.964zM75.76 23.591c.456-.82.923-1.402 1.401-1.743.479-.342 1.082-.513 1.812-.513 1.116 0 1.902.296 2.358.889.479.592.718 1.606.718 3.042l.068 8.886c0 1.573-.262 2.632-.786 3.18-.501.546-1.424.82-2.769.82-.956 0-1.697-.229-2.221-.684-.501-.456-.934-1.3-1.299-2.53-.593-2.164-1.538-3.714-2.837-4.648-1.299-.957-3.099-1.435-5.4-1.435-3.51 0-6.198 1.184-8.067 3.554-1.868 2.37-2.803 5.8-2.803 10.288 0 4.466.946 7.896 2.837 10.288 1.892 2.393 4.592 3.59 8.101 3.59 2.393 0 5.024-.798 7.896-2.393 2.893-1.595 4.716-2.393 5.468-2.393.889 0 1.63.376 2.222 1.128.615.752.923 1.686.923 2.803 0 2.005-1.766 3.896-5.298 5.674-3.532 1.777-7.508 2.666-11.929 2.666-5.97 0-10.8-1.971-14.492-5.913-3.691-3.943-5.537-9.092-5.537-15.45 0-6.13 1.869-11.222 5.605-15.278 3.737-4.056 8.477-6.084 14.22-6.084 1.617 0 3.212.182 4.784.547 1.573.364 3.247.934 5.025 1.709zm25.805 11.28c.798-1.39 1.926-2.45 3.384-3.18 1.459-.729 3.202-1.093 5.23-1.093 3.6 0 6.369 1.048 8.305 3.144 1.96 2.097 2.94 5.104 2.94 9.024v12.749h.581c1.208 0 2.119.319 2.734.957.638.615.957 1.526.957 2.734 0 1.344-.33 2.313-.991 2.905-.638.593-1.732.889-3.281.889h-8.477c-1.526 0-2.62-.296-3.281-.889-.638-.592-.957-1.56-.957-2.905 0-1.23.308-2.153.923-2.769.615-.615 1.538-.922 2.768-.922h.547v-9.947c0-2.916-.364-4.933-1.093-6.05-.707-1.139-1.926-1.708-3.658-1.708-1.823 0-3.384.74-4.682 2.221-1.299 1.459-1.949 3.304-1.949 5.537v9.947h.547c1.231 0 2.154.319 2.769.957.638.615.957 1.526.957 2.734 0 1.344-.331 2.313-.991 2.905-.661.593-1.755.889-3.282.889h-8.476c-1.572 0-2.677-.285-3.316-.855-.638-.592-.957-1.572-.957-2.939 0-1.208.308-2.12.923-2.734.638-.638 1.561-.957 2.769-.957h.58V25.847h-.58c-1.208 0-2.142-.32-2.803-.957-.638-.661-.957-1.607-.957-2.837 0-1.345.33-2.313.991-2.905.661-.593 1.778-.89 3.35-.89h6.426c.774 0 1.31.16 1.606.48.296.318.444.91.444 1.777V34.87zm61.49 20.644h.547c1.23 0 2.164.33 2.802.99.661.639.992 1.562.992 2.77 0 1.321-.342 2.278-1.026 2.87-.661.57-1.766.855-3.315.855h-3.213c-1.14 0-1.994-.217-2.564-.65-.547-.432-1.002-1.218-1.367-2.358a23.517 23.517 0 01-6.015 2.871c-2.12.661-4.262.992-6.426.992-3.669 0-6.551-.912-8.648-2.735-2.096-1.823-3.144-4.318-3.144-7.485 0-3.418 1.356-6.073 4.067-7.964 2.712-1.891 6.517-2.837 11.416-2.837 1.094 0 2.256.057 3.486.17 1.231.115 2.61.297 4.136.548v-.65c0-2.05-.501-3.611-1.504-4.682-.98-1.071-2.438-1.607-4.375-1.607-1.504 0-3.429.559-5.776 1.675-2.324 1.117-4.033 1.675-5.127 1.675-1.071 0-1.937-.308-2.598-.923-.66-.638-.991-1.47-.991-2.495 0-1.846 1.345-3.304 4.033-4.375 2.712-1.094 6.392-1.64 11.04-1.64 4.854 0 8.329.933 10.425 2.802 2.097 1.868 3.145 5.036 3.145 9.502v12.68zm-8.272-6.597a32.716 32.716 0 00-3.144-.547 18.938 18.938 0 00-2.666-.205c-2.507 0-4.478.422-5.913 1.265-1.413.843-2.12 2.005-2.12 3.486 0 1.322.456 2.336 1.368 3.042.911.684 2.221 1.025 3.93 1.025 1.573 0 3.054-.227 4.444-.683 1.39-.456 2.757-1.162 4.101-2.12v-5.263zm38.555-15.176a9.522 9.522 0 013.315-2.324 9.978 9.978 0 014.034-.82c3.098 0 5.332.922 6.699 2.768 1.367 1.823 2.051 4.888 2.051 9.194v12.955h.478c1.071 0 1.869.319 2.393.957.546.615.82 1.526.82 2.734 0 1.367-.285 2.347-.855 2.94-.546.57-1.492.854-2.836.854h-5.811c-.615 0-1.094-.125-1.436-.376-.341-.273-.512-.638-.512-1.094V42.22c0-1.527-.24-2.666-.718-3.418-.479-.752-1.174-1.128-2.085-1.128-1.139 0-2.028.512-2.666 1.538-.615 1.003-.923 2.45-.923 4.34v11.964h.513c1.048 0 1.846.319 2.392.957.547.615.821 1.526.821 2.734 0 1.367-.285 2.347-.855 2.94-.569.57-1.526.854-2.871.854h-5.81c-.616 0-1.106-.125-1.47-.376a1.298 1.298 0 01-.547-1.094V42.22c0-1.527-.228-2.666-.684-3.418-.455-.752-1.139-1.128-2.05-1.128-1.14 0-2.04.512-2.701 1.538-.638 1.025-.957 2.472-.957 4.34v11.964h.513c1.071 0 1.869.307 2.393.922.547.616.82 1.539.82 2.77 0 1.366-.285 2.346-.855 2.938-.569.57-1.526.855-2.871.855h-7.758c-1.322 0-2.268-.296-2.837-.889-.57-.592-.855-1.56-.855-2.905 0-1.208.262-2.12.786-2.734.547-.638 1.356-.957 2.427-.957h.479V38.903h-.479c-1.071 0-1.891-.319-2.461-.957-.547-.66-.82-1.595-.82-2.802 0-1.322.285-2.268.854-2.837.593-.593 1.561-.889 2.906-.889h4.614c.934 0 1.561.194 1.88.581.342.365.512 1.082.512 2.153.844-1.162 1.858-2.039 3.042-2.632 1.185-.615 2.507-.922 3.965-.922 1.322 0 2.473.262 3.452.786.98.501 1.835 1.287 2.564 2.358zm33.359 26.045v9.297h4.341c1.55 0 2.655.296 3.316.889.683.592 1.025 1.56 1.025 2.905 0 1.322-.33 2.267-.991 2.837-.661.57-1.778.854-3.35.854h-14.492c-1.572 0-2.678-.285-3.316-.854-.638-.547-.957-1.493-.957-2.837s.319-2.313.957-2.905c.661-.593 1.766-.889 3.316-.889h2.016v-30.18h-.546c-1.208 0-2.131-.32-2.769-.958-.638-.638-.957-1.572-.957-2.802 0-1.345.319-2.302.957-2.871.638-.57 1.743-.855 3.315-.855h5.264c.661 0 1.151.125 1.47.376.319.228.478.57.478 1.025v2.461c1.163-1.55 2.564-2.711 4.205-3.486 1.663-.798 3.531-1.196 5.605-1.196 4.671 0 8.545 1.492 11.621 4.477 3.076 2.985 4.614 6.745 4.614 11.28 0 4.74-1.492 8.67-4.477 11.792-2.985 3.098-6.745 4.648-11.28 4.648-1.845 0-3.577-.25-5.195-.752-1.595-.524-2.985-1.276-4.17-2.256zm7.896-21.91c-2.256 0-4.113.833-5.572 2.496-1.458 1.663-2.187 3.794-2.187 6.392 0 2.597.729 4.728 2.187 6.391 1.459 1.664 3.316 2.495 5.572 2.495 2.256 0 4.113-.831 5.571-2.495 1.481-1.686 2.222-3.816 2.222-6.391 0-2.598-.729-4.729-2.188-6.392-1.458-1.663-3.327-2.495-5.605-2.495zm45.425 17.638h7.348c1.572 0 2.689.285 3.35.854.661.57.991 1.515.991 2.837 0 1.344-.342 2.313-1.025 2.905-.661.593-1.766.889-3.316.889h-23.105c-1.55 0-2.666-.296-3.35-.889-.661-.592-.991-1.56-.991-2.905 0-1.322.319-2.267.957-2.837.661-.57 1.789-.854 3.384-.854h7.348V38.903h-3.862c-1.527 0-2.62-.285-3.281-.854-.661-.593-.991-1.561-.991-2.905 0-1.345.319-2.302.957-2.871.638-.57 1.743-.855 3.315-.855h10.288c.638 0 1.128.137 1.47.41.342.25.513.604.513 1.06v22.627zm-4.922-39.546c1.663 0 2.768.319 3.315.957.547.638.82 2.165.82 4.58 0 2.324-.25 3.771-.752 4.34-.478.548-1.629.821-3.452.821-1.777 0-2.928-.262-3.452-.786-.501-.524-.752-1.572-.752-3.145 0-2.916.262-4.773.786-5.571.524-.797 1.687-1.196 3.487-1.196zm42.177 21.909c-2.666 0-4.864.877-6.596 2.632-1.709 1.732-2.564 3.953-2.564 6.665 0 2.734.855 5.001 2.564 6.802 1.732 1.777 3.93 2.666 6.596 2.666s4.865-.89 6.597-2.666c1.732-1.8 2.598-4.068 2.598-6.802 0-2.712-.866-4.933-2.598-6.665-1.709-1.755-3.908-2.632-6.597-2.632zm0-7.212c5.538 0 10.026 1.55 13.467 4.649 3.441 3.098 5.161 7.075 5.161 11.928 0 4.877-1.72 8.864-5.161 11.963-3.441 3.099-7.929 4.648-13.467 4.648-5.514 0-9.991-1.549-13.432-4.648-3.441-3.099-5.161-7.087-5.161-11.963 0-4.853 1.72-8.83 5.161-11.928 3.463-3.1 7.941-4.649 13.432-4.649zm56.397 24.78h.444c1.276 0 2.233.32 2.871.957.638.616.957 1.55.957 2.803 0 1.344-.33 2.313-.991 2.905-.638.593-1.732.889-3.281.889h-8.408c-1.527 0-2.632-.296-3.316-.889-.661-.592-.991-1.56-.991-2.905 0-1.253.319-2.187.957-2.803.661-.638 1.641-.957 2.94-.957h.41v-9.878c0-2.734-.388-4.67-1.162-5.81-.752-1.162-2.017-1.743-3.794-1.743-1.892 0-3.441.695-4.649 2.085-1.185 1.367-1.777 3.19-1.777 5.468v9.878h.41c1.299 0 2.267.32 2.905.957.638.616.957 1.55.957 2.803 0 1.344-.33 2.313-.991 2.905-.661.593-1.754.889-3.281.889h-8.477c-1.526 0-2.62-.296-3.281-.889-.661-.592-.991-1.56-.991-2.905 0-1.253.319-2.187.957-2.803.638-.638 1.606-.957 2.905-.957h.41V38.903h-.581c-1.23 0-2.164-.307-2.802-.922-.638-.639-.958-1.561-.958-2.77 0-1.343.331-2.312.992-2.904.661-.593 1.777-.889 3.349-.889h5.811c.638 0 1.116.125 1.435.376.342.25.513.615.513 1.094v2.666c1.048-1.64 2.381-2.871 3.999-3.692 1.641-.843 3.532-1.264 5.674-1.264 3.646 0 6.357 1.105 8.135 3.315 1.8 2.21 2.7 5.583 2.7 10.117v11.416zm18.662 7.076a6.749 6.749 0 01-1.846 1.025 5.026 5.026 0 01-1.914.376c-.98 0-1.675-.262-2.085-.786-.387-.524-.581-1.504-.581-2.94v-4.546c0-1.504.251-2.563.752-3.178.502-.638 1.367-.957 2.598-.957 1.344 0 2.438.649 3.281 1.948.501.706.923 1.23 1.265 1.572a11.07 11.07 0 003.896 2.256c1.481.501 3.168.752 5.059.752 1.64 0 2.951-.32 3.931-.957.979-.638 1.469-1.47 1.469-2.495 0-1.846-2.632-3.122-7.895-3.828a54.64 54.64 0 01-2.735-.376c-3.965-.547-6.915-1.618-8.852-3.213-1.937-1.618-2.905-3.783-2.905-6.494 0-3.213 1.162-5.697 3.486-7.451 2.324-1.755 5.64-2.632 9.946-2.632 1.481 0 2.997.125 4.546.376 1.572.227 3.179.592 4.819 1.093.479-.57.98-.99 1.504-1.264a3.996 3.996 0 011.812-.41c.934 0 1.64.296 2.119.888.501.57.752 1.436.752 2.598v4.204c0 .98-.251 1.743-.752 2.29-.501.524-1.208.786-2.119.786-.934 0-2.541-.809-4.82-2.427-2.255-1.64-4.523-2.46-6.801-2.46-1.778 0-3.156.296-4.136.888-.98.57-1.47 1.367-1.47 2.393 0 1.595 2.051 2.666 6.153 3.213 1.184.136 2.119.25 2.802.341 5.15.752 8.682 1.88 10.596 3.384 1.937 1.481 2.905 3.692 2.905 6.631 0 3.44-1.276 6.107-3.828 7.998-2.529 1.869-6.129 2.803-10.801 2.803a35.77 35.77 0 01-5.263-.376 33.794 33.794 0 01-4.888-1.025zm50.996-15.279c-1.663-1.048-2.837-2.37-3.52-3.965-.684-1.595-1.026-4.101-1.026-7.52v-7.211c0-1.071-.273-1.88-.82-2.427-.547-.57-1.458-.946-2.734-1.128-1.664-.228-2.769-.615-3.316-1.162-.547-.547-.82-1.378-.82-2.495 0-1.14.342-2.028 1.025-2.666.707-.638 1.698-.957 2.974-.957 1.686 0 3.258.25 4.717.752 1.458.501 2.677 1.208 3.657 2.119 1.116 1.025 1.903 2.301 2.358 3.828.456 1.504.684 4.17.684 7.998v4.068c0 3.964 1.561 6.254 4.682 6.87.752.114 1.333.227 1.744.341.957.251 1.663.673 2.119 1.265.455.57.683 1.333.683 2.29 0 1.003-.239 1.812-.717 2.427-.479.592-1.197 1.002-2.154 1.23-.364.069-.877.16-1.538.274-3.213.615-4.819 2.928-4.819 6.938v3.965c0 3.6-.171 6.096-.513 7.486-.342 1.412-.923 2.608-1.743 3.588-.889 1.071-2.176 1.937-3.862 2.598a13.63 13.63 0 01-5.23 1.025c-1.276 0-2.278-.33-3.008-.99-.706-.639-1.059-1.539-1.059-2.701 0-1.071.262-1.88.786-2.427.547-.547 1.663-.957 3.35-1.23 1.39-.205 2.324-.581 2.802-1.128.502-.547.752-1.424.752-2.632V58.795c0-3.622.331-6.174.991-7.655.661-1.482 1.846-2.78 3.555-3.897z"
        fill="#503636"
      />
    </svg>
  )
}

export default SvgLogo