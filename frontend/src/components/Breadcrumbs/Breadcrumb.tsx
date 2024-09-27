import { Link, useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../helpers/general';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  pageName: string;
  breadcrumbItems?: BreadcrumbItem[]; // Optional breadcrumb items prop
}

const Breadcrumb = ({ pageName, breadcrumbItems }: BreadcrumbProps) => {
  const noLinkPaths = ['add', 'edit'];
  const location = useLocation();

  // Split the pathname into an array of paths, removing any empty segments
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If breadcrumbItems are provided, use them, otherwise use dynamic path
  const breadcrumbs =
    breadcrumbItems ||
    pathnames.map((path, index) => {
      const noLink = noLinkPaths.includes(path);
      return {
        label: capitalizeFirstLetter(path),
        link: !noLink && `/${pathnames.slice(0, index + 1).join('/')}`,
      };
    });

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {capitalizeFirstLetter(pageName)}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-primary" to="/">
              Dashboard /
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={index}>
                {!breadcrumb.link || isLast ? (
                  <span className="font-medium">
                    {breadcrumb.label} {!isLast && '/'}
                  </span>
                ) : (
                  <Link className={`font-medium ${breadcrumb.link && 'text-primary'}`} to={breadcrumb.link}>
                    {breadcrumb.label} {!isLast && '/'}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
