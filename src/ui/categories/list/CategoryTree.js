import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Col, Spinner } from 'patternfly-react';
import TreeNodeFolderIcon from 'ui/common/tree-node/TreeNodeFolderIcon';
import TreeNodeExpandedIcon from 'ui/common/tree-node/TreeNodeExpandedIcon';
import CategoryListMenuActions from 'ui/categories/list/CategoryListMenuActions';
import RowSpinner from 'ui/pages/common/RowSpinner';
import DeleteCategoryModalContainer from 'ui/categories/common/DeleteCategoryModalContainer';

class CategoryTree extends Component {
  componentWillMount() {
    this.props.onWillMount(this.props);
  }

  renderRows() {
    const { categories, onClickDelete, onClickAdd } = this.props;
    return categories.map((category, i) => {
      const onClickExpand = () => {
        if (!category.isEmpty) {
          this.props.onExpandCategory(category.code);
        }
      };
      const className = ['CategoryTree__tree-column-td'];
      if (category.isEmpty) {
        className.push('CategoryTree__tree-column-td--empty');
      }

      return (
        <tr key={category.code} className="CategoryTree__row">
          <td className={className.join(' ')}>
            <span
              role="button"
              tabIndex={i}
              className="CategoryTree__icons-label"
              style={{ marginLeft: category.depth * 24 }}
              onClick={onClickExpand}
              onKeyDown={onClickExpand}
            >
              <TreeNodeExpandedIcon expanded={category.expanded} />
              <TreeNodeFolderIcon empty={category.isEmpty} />
              <span className="CategoryTree__category-name">
                { category.title }
              </span>
              <RowSpinner loading={!!category.loading} />
            </span>
          </td>
          <td className="text-center">
            <CategoryListMenuActions
              code={category.code}
              onClickDelete={() => onClickDelete(category)}
              onClickAdd={onClickAdd}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Col xs={12}>
        <Spinner loading={!!this.props.loading}>
          <table className="CategoryTree CategoryTree__table table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>
                  <FormattedMessage id="category.tree" />
                  <div
                    onClick={this.props.onExpandAll}
                    onKeyDown={this.props.onExpandAll}
                    role="button"
                    tabIndex={-1}
                    className="CategoryTree CategoryTree__toggler CategoryTree__toggler--expand"
                  >
                    <span className="icon fa fa-plus-square" />
                    <FormattedMessage id="pageTree.expand" />
                  </div>
                  <div
                    onClick={this.props.onCollapseAll}
                    onKeyDown={this.props.onCollapseAll}
                    role="button"
                    tabIndex={-2}
                    className="CategoryTree CategoryTree__toggler"
                  >
                    <span className="icon fa fa-minus-square" />
                    <FormattedMessage id="pageTree.collapse" />
                  </div>
                </th>
                <th className="GroupListTable__th-xs text-center">
                  <FormattedMessage id="app.actions" />
                </th>
              </tr>
            </thead>
            <tbody>
              { this.renderRows() }
            </tbody>
          </table>
          <DeleteCategoryModalContainer />
        </Spinner>
      </Col>
    );
  }
}

CategoryTree.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    isEmpty: PropTypes.bool.isRequired,
  })),
  onWillMount: PropTypes.func.isRequired,
  onExpandCategory: PropTypes.func,
  onExpandAll: PropTypes.func.isRequired,
  onCollapseAll: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func,
  onClickAdd: PropTypes.func,
  loading: PropTypes.bool,
};

CategoryTree.defaultProps = {
  categories: [],
  onExpandCategory: null,
  onClickDelete: null,
  onClickAdd: null,
  loading: false,
};

export default CategoryTree;
