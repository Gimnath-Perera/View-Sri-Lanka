import logo from 'src/assets/img/logo.jpg';

const Header = () => {
  return (
    <div class='navbar shadow-lg bg-white text-black-content'>
      <div class='flex-1 px-2 mx-2'>
        <div class='bg-indigo-300'>
          <img class='object-cover w-48' src={logo} />
        </div>
      </div>
      <div class='flex-none hidden px-2 mx-2 lg:flex'>
        <div class='flex items-stretch'>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <path d='M19.828 9.125l-2.976-2.762V1.84h-3.426v1.344L10 0 .172 9.125a.345.345 0 00.469.504L1.777 8.57V20h16.446V8.57l1.14 1.059a.343.343 0 00.484-.02.345.345 0 00-.019-.484zm-5.715-6.602h2.055v3.204L14.113 3.82zM7.945 19.316v-7.218c0-.18.14-.32.32-.32h3.47c.175 0 .32.14.32.32v7.218zm9.594 0h-4.797v-7.218a1.01 1.01 0 00-1.008-1.008H8.266a1.01 1.01 0 00-1.008 1.008v7.218H2.46V7.938L10 .934l4.895 4.546 1.957 1.82.687.634zm0 0'></path>
            </svg>
            Home
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <g>
                <path d='M17.094 0h-8.88C7.528 0 6.97.559 6.97 1.246v2.188h.617v-1.11c.187.106.402.168.629.168h.625a.628.628 0 110 1.258H3.523v-.316h-.617V20h.617v-7.191H8.84a1.25 1.25 0 001.25-1.246V3.12a1.25 1.25 0 00-1.25-1.246h-.625a.631.631 0 01-.63-.629c0-.348.286-.629.63-.629h8.004l-1.453 4.067 1.453 4.066h-5.817v.621h6.692l-1.672-4.687zM9.469 11.563a.631.631 0 01-.63.628H3.524V4.367H8.84c.23 0 .445-.062.629-.168zm0 0'></path>
                <path d='M2.906 2.184h.617v.937h-.617zm0 0M4.152 10.941h.625v.618h-.625zm0 0M5.402 10.941h.625v.618h-.625zm0 0M6.652 10.941h.625v.618h-.625zm0 0'></path>
              </g>
            </svg>
            Destinations
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/faq'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <path d='M7.488 8.664a.426.426 0 01-.422.426H3.36a.427.427 0 01-.425-.426c0-.23.191-.422.425-.422h3.707c.23 0 .422.192.422.422zM6.184 10.02H4.238a.423.423 0 000 .848h1.946a.423.423 0 100-.848zm13.68 5.546c.171.16.183.426.023.598-.707.766-1.864.691-3.328.606-1.786-.11-4.004-.247-6.356 1.027a.44.44 0 01-.406 0 8.823 8.823 0 00-2.805-.957v1.941a.43.43 0 01-.21.367.42.42 0 01-.419.004l-1.152-.636-1.149.636a.423.423 0 01-.629-.371V16.77c-1.46.09-2.617.156-3.32-.606a.421.421 0 01.024-.598.421.421 0 01.597.024c.434.469 1.414.41 2.657.332 1.742-.106 4.117-.25 6.609 1.023 2.492-1.273 4.867-1.129 6.61-1.023 1.242.078 2.222.137 2.656-.332a.421.421 0 01.597-.024zm-13.72 1.172a14.925 14.925 0 00-1.863-.015v1.34l.727-.403a.425.425 0 01.41 0l.727.402zm6.368-9.851c0 .234.191.426.422.426h3.707a.427.427 0 00.425-.426.426.426 0 00-.425-.422h-3.707a.425.425 0 00-.422.422zM20 1.219v12.867c0 .105-.04.21-.113.289-.707.762-1.864.691-3.328.602-1.782-.11-4.004-.247-6.356 1.027-.004.004-.008.008-.015.008a.404.404 0 01-.395-.008c-2.36-1.254-4.57-1.137-6.352-1.027-1.464.09-2.62.16-3.328-.602a.421.421 0 01-.113-.29V1.22c0-.153.078-.29.207-.364A.42.42 0 01.625.844c2.352 1.277 4.574 1.14 6.36 1.031 1.265-.078 2.3-.14 3.015.336.715-.477 1.75-.414 3.016-.336 1.785.11 4.007.246 6.359-1.031a.42.42 0 01.418.011c.129.075.207.211.207.364zM9.578 2.953c-.48-.36-1.402-.305-2.543-.234-1.648.101-3.851.238-6.187-.82v12c.476.359 1.398.304 2.543.234.52-.031 1.093-.067 1.71-.067 1.34 0 2.876.164 4.477.887zm9.574-1.055c-2.336 1.059-4.539.922-6.187.82-1.145-.07-2.063-.124-2.543.235v12c2.34-1.055 4.543-.922 6.187-.82 1.145.07 2.067.125 2.543-.235zm-2.511 6.344h-3.707a.425.425 0 00-.422.422c0 .234.191.426.422.426h3.707a.427.427 0 00.425-.426.426.426 0 00-.425-.422zM7.066 6.465H3.36a.426.426 0 00-.425.422c0 .234.191.426.425.426h3.707c.23 0 .422-.192.422-.426a.425.425 0 00-.422-.422zm8.696 3.555h-1.946a.423.423 0 100 .847h1.946a.423.423 0 000-.847zm0 0'></path>
            </svg>
            FAQ
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <g>
                <path d='M8.953 9.04a1.4 1.4 0 01.285-.845c.25-.32.535-.613.848-.87.285-.243.547-.513.777-.805.149-.207.223-.454.219-.707a1.14 1.14 0 00-.336-.836 1.144 1.144 0 00-.832-.34 1.212 1.212 0 00-.836.32 2.104 2.104 0 00-.558.93l-1.266-.555A2.971 2.971 0 018.266 3.77a2.74 2.74 0 011.707-.543c.468-.004.93.101 1.343.312.399.2.735.504.973.879.242.383.367.828.36 1.277.007.41-.106.809-.317 1.157a4.97 4.97 0 01-.965 1.097c-.281.242-.55.5-.797.778a.886.886 0 00-.222.59c.004.132.023.265.058.39H9.113a1.571 1.571 0 01-.16-.668zm.86 4.1a1.09 1.09 0 01-.797-.32c-.215-.21-.332-.5-.325-.8-.007-.301.11-.594.325-.805.21-.215.5-.336.796-.328.305-.008.594.11.81.324.21.215.323.508.316.809.007.3-.11.59-.325.8-.21.211-.5.328-.8.32zm0 0'></path>
                <path d='M.867 19.867a.842.842 0 01-.367-.082.854.854 0 01-.5-.781V2.137C0 .977.941.035 2.102.035H17.8c1.16 0 2.101.942 2.101 2.102v12.008c0 1.16-.941 2.101-2.101 2.101H6.055c-.356 0-.696.125-.965.352l-3.672 3.07a.852.852 0 01-.55.2zM2.102 1.211a.925.925 0 00-.926.926v16.199l3.16-2.64a2.68 2.68 0 011.719-.626H17.8a.925.925 0 00.926-.925V2.137a.925.925 0 00-.926-.926zm0 0'></path>
              </g>
            </svg>
            About
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <g>
                <path d='M12.914 11.738h-6.34c-.898 0-1.629.782-1.629 1.739 0 .957.73 1.738 1.63 1.738h6.34c.898 0 1.628-.781 1.628-1.738s-.73-1.739-1.629-1.739zm0 2.606h-6.34c-.418 0-.758-.39-.758-.867 0-.48.34-.868.758-.868h6.34c.418 0 .758.387.758.868 0 .476-.34.867-.758.867zm0 0M6.71 8.629h3.462c.973 0 1.762-.758 1.762-1.688 0-.921-.758-1.617-1.762-1.617H6.71c-1.008 0-1.766.696-1.766 1.617 0 .93.793 1.688 1.766 1.688zm0-2.434h3.462c.441 0 .894.254.894.746 0 .45-.402.817-.894.817H6.71c-.496 0-.895-.367-.895-.817 0-.492.45-.746.895-.746zm0 0'></path>
                <path d='M19.754 9.016c-.117-1.38-1.582-1.871-2.336-1.942a9.214 9.214 0 00-.758-.008V6.63C16.66 3.098 13.695 0 10.316 0h-3.91C3.04 0 .196 3.035.196 6.629v6.992c0 3.504 2.784 6.36 6.21 6.36l3.32-.004L9.72 20h4.645c.363 0 5.062-.113 5.39-5.637.004-.164.113-4.02 0-5.347zm-.867 5.308c-.29 4.848-4.348 4.813-4.532 4.805h-3.43l.009-.02H6.406c-2.945 0-5.34-2.46-5.34-5.488V6.63C1.066 3.508 3.512.87 6.406.87h3.91c2.914 0 5.473 2.691 5.473 5.758v1.328l.45-.012c.234-.008.886-.023 1.1-.004.016.004 1.462.145 1.548 1.149.11 1.281 0 5.21 0 5.234zm0 0'></path>
              </g>
            </svg>
            Blog
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='contact-us'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2420'
              height='20'
              viewBox='0 0 20 20'
              class='inline-block w-5 mr-2 stroke-current'
            >
              <path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.25'
                d='M3.125 14.508L5.117 16.5c.313.32.742.5 1.192.5.449 0 .878-.18 1.191-.5l1.133-1.133a1.67 1.67 0 000-2.36l-.742-.75a13.754 13.754 0 014.699-4.706l.742.75a1.67 1.67 0 002.36 0l1.117-1.11a1.67 1.67 0 000-2.359l-1.993-2.008a.84.84 0 00-1.05-.11A38.325 38.325 0 003.023 13.458a.838.838 0 00.102 1.05zm0 0'
              ></path>
            </svg>
            Contact
          </a>
        </div>
      </div>
      <div class='flex-none'>
        <button class='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='inline-block w-6 h-6 stroke-current'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
