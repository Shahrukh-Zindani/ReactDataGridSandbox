import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import createRowData from "./createRowData";
import { Icon } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import "./styles.css";

import PageGuide from "./PageGuide";

const defaultColumnProperties = {
  width: 160
};

const friendOptions = [
  {
    key: "Elliot Fu",
    text: "PTO",
    value: "PTO"
  },
  {
    key: "Stevie Feliciano",
    text: "Title Procurement",
    value: "Title Procurement"
  },
  {
    key: "Christian",
    text: "Mi Org",
    value: "Mi Org"
  },
  {
    key: "Matt",
    text: "Title 3.0",
    value: "Title 3.0"
  },
  {
    key: "Justen Kitsune",
    text: "UK Claims Settlement",
    value: "UK Claims Settlement"
  }
];

const columns = [
  {
    key: "fullName",
    name: "Full Name"
  },
  {
    key: "sunday",
    name: "Sunday"
  },
  {
    key: "monday",
    name: "Monday"
  },
  {
    key: "tuesday",
    name: "Tuesday"
  },
  {
    key: "wednesday",
    name: "Wednesday"
  },
  {
    key: "thursday",
    name: "Thursday"
  },
  {
    key: "friday",
    name: "Friday"
  },
  {
    key: "saturday",
    name: "Saturday"
  },
  {
    key: "weeklyTotal",
    name: "Weekly Total"
  },
  {
    key: "actions",
    name: "Actions"
  }
].map(c => ({ ...c, ...defaultColumnProperties }));

const ROW_COUNT = 50;
const ROW_HEIGHT = 200;

// const Panel = ({ title, children }) => {
//   return (
//     <div onClick=class="panel panel-default">
//       <div class="panel-heading">{title}</div>
//       <div class="panel-body">{children}</div>
//     </div>
//   );
// };
const IconExampleDisabled = () => <Icon disabled name="users" />;
const Contact = ({
  firstName,
  lastName,
  companyName,
  jobTitle,
  email,
  phone
}) => {
  return (
    <div style={{ paddingLeft: "150px" }}>
      <address>
        <strong>
          {firstName} {lastName}
        </strong>
        <br />
        {jobTitle}
        <br />
        {companyName}
        <br />
        <abbr title="Phone">P:</abbr> {phone}
        <br />
        <a href="mailto:#">{email}</a>
      </address>
    </div>
  );
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    let rows = [];
    for (let i = 1; i < 10; i++) {
      rows.push({
        id: i,
        title: "Shahrukh " + i,
        count: i * 1000
      });
    }
    this.state = { rows, selectedIndexes: [] };
  }

  RowRenderer = ({ row, idx }) => {
    const { firstName, lastName, id } = row;
    console.log(firstName, "first name");
    console.log(row, "row");
    // if (this.state.selectedIndexes.indexOf(idx) != -1) {
    let conditionSpan = false;
    if (this.state.selectedIndexes.includes(idx)) {
      conditionSpan = true;
    }

    const carrot = !conditionSpan ? (
      <MdKeyboardArrowRight />
    ) : (
      <MdKeyboardArrowDown />
    );
    return (
      <div>
        <div class="panel panel-default" style={{ width: "auto" }}>
          <div class="panel-heading">
            <div style={{ display: "flex" }}>
              <div
                onClick={() => {
                  const selectedIndexes = this.state.selectedIndexes;
                  if (selectedIndexes.includes(idx)) {
                    this.setState({
                      selectedIndexes: this.state.selectedIndexes.filter(x => {
                        return x !== idx;
                      })
                    });
                  } else {
                    this.setState({
                      selectedIndexes: this.state.selectedIndexes.concat(idx)
                    });
                  }
                }}
              >
                {carrot}
              </div>
              <div
                style={{
                  width: "120px",
                  paddingLeft: "60px",
                  paddingRight: "20px"
                }}
              >
                {firstName}
              </div>
              <div style={{ paddingLeft: "50px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {Math.ceil(Math.random() * 10)}
                </div>
              </div>
              {/* <div style={{ paddingLeft: "30px", paddingRight: "20px" }}>
                <input style={{ width: "120px" }} />
              </div>
              <div style={{ paddingLeft: "30px", paddingRight: "20px" }}>
                <input style={{ width: "120px" }} />
              </div> */}
            </div>
          </div>
          <div>
            {conditionSpan && (
              <div style={{ width: "140px", padding: "10px" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ minWidth: "180px" }}>
                      <Dropdown
                        placeholder="Select Project"
                        fluid
                        selection
                        options={friendOptions}
                      />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",

                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ minWidth: "180px" }}>
                      <Dropdown
                        placeholder="Select Project"
                        fluid
                        selection
                        options={friendOptions}
                      />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",

                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <input style={{ height: "30px", width: "100px" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  onRowsSelected = rows => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      )
    });
  };

  onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      )
    });
  };

  switchDetailedView = rowNumber => {
    console.log("rowNumber", rowNumber);
  };

  render() {
    console.log(this.state, "state");
    const { rows } = this.props;
    return (
      <div style={{ width: "auto" }}>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={ROW_COUNT}
          minHeight={1050}
          rowRenderer={this.RowRenderer}
          rowHeight={ROW_HEIGHT}
          headerRowHeight={50}
          enableCellAutoFocus={false}
          enableCellSelect={true}
          onRowDoubleClick={this.switchDetailedView}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes
            }
          }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example rows={createRowData(ROW_COUNT)} />, rootElement);
