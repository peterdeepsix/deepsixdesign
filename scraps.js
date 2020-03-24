console.log(`LOCATION - PATHNAME - ${location.pathname}`);

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
