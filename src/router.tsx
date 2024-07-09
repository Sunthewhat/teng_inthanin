import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/root';
import { HomePage } from './pages/home';
import { NamePage } from './pages/name';
import { ChildRootLayout } from './components/childRoot';
import { AgePage } from './pages/age';
import { FindingPage } from './pages/finding';
import { QuestionPage } from './pages/question';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/name',
				element: <NamePage />,
			},
		],
	},
	{
		path: '/game',
		element: <ChildRootLayout />,
		children: [
			{
				path: 'name',
				element: <NamePage />,
			},
			{
				path: 'age',
				element: <AgePage />,
			},
			{
				path: 'finding',
				element: <FindingPage />,
			},
			{
				path: 'question',
				element: <QuestionPage />,
			},
		],
	},
]);

export { Router };
