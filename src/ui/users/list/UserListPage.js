import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Breadcrumb } from 'patternfly-react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { PermissionCheck } from '@entando/utils';

import BreadcrumbItem from 'ui/common/BreadcrumbItem';
import InternalPage from 'ui/internal-page/InternalPage';
import PageTitle from 'ui/internal-page/PageTitle';
import withPermissions from 'ui/auth/withPermissions';
import UserListTableContainer from 'ui/users/list/UserListTableContainer';
import UserSearchFormContainer from 'ui/users/list/UserSearchFormContainer';
import { ROUTE_USER_ADD } from 'app-init/router';
import { CRUD_USERS_PERMISSION, VIEW_USERS_AND_PROFILES_PERMISSION } from 'state/permissions/const';

export const UserListPageBody = ({ userPermissions }) => (
  <InternalPage className="UserListPage">
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <FormattedMessage id="menu.userManagement" />
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <FormattedMessage id="menu.users" />
            </BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <PageTitle
            titleId="user.list.title"
            helpId="user.help"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6} xsOffset={3}>
          <UserSearchFormContainer />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <PermissionCheck
            userPermissions={userPermissions}
            requiredPermissions={CRUD_USERS_PERMISSION}
          >
            <Link to={ROUTE_USER_ADD}>
              <Button
                type="button"
                className="pull-right ListUserPage__add"
                bsStyle="primary"
              >
                <FormattedMessage
                  id="app.add"
                />
              </Button>
            </Link>
          </PermissionCheck>
        </Col>
      </Row>
      <Row>
        <UserListTableContainer />
      </Row>
      {/* Entity references placeholder */}
    </Grid>
  </InternalPage>
);

UserListPageBody.propTypes = {
  userPermissions: PropTypes.arrayOf(PropTypes.string),
};

UserListPageBody.defaultProps = {
  userPermissions: [],
};

export default withPermissions(VIEW_USERS_AND_PROFILES_PERMISSION)(UserListPageBody);
