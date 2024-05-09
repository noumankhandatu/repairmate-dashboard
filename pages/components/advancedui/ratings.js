import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import ReactRating from "react-rating";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from "@mui/icons-material/Circle";
import Seo from '../../../shared/layout-components/seo/seo';

const StyledRating1 = styled(Rating)({
  ".MuiRating-iconFilled": {
	color: "#faaf00",
  },
});
const StyledRating = styled(Rating)({
	".MuiRating-iconFilled": {
	  color: "#ff6d75",
	},
  });
  function IconContainer(props) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
	value: PropTypes.number.isRequired,
  };

  const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
  };
  const customIcons = {
	1: {
	  icon: <SentimentVeryDissatisfiedIcon />,
	  label: "Very Dissatisfied",
	},
	2: {
	  icon: <SentimentDissatisfiedIcon />,
	  label: "Dissatisfied",
	},
	3: {
	  icon: <SentimentSatisfiedIcon />,
	  label: "Neutral",
	},
	4: {
	  icon: <SentimentSatisfiedAltIcon />,
	  label: "Satisfied",
	},
	5: {
	  icon: <SentimentVerySatisfiedIcon />,
	  label: "Very Satisfied",
	},
  };
const Ratings = () => {
const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  
  return (
    <>
        <Seo title="Ratings"/>

    <PageHeader title="Rating" item="Advanced UI" active_item="Rating"/>

        {/* <!-- Row --> */}
		<Row className="row-sm">
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Star Rating</label>
              </h6>
          </Card.Header>
          <Card.Body>
            <div className="static-rate text-center fs-30">
			      <Rating defaultValue={5} max={5} /> 
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Disabled Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className=" text-center fs-30">
			<div>
      <Rating name="disabled" value={2} disabled />
    </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Radio Group Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box-body  text-center fs-30">
			  <Rating
      className="text-center"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Hover Feedback Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-large box-example-horizontal">
              <div className="box-body text-center">
			  <div
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        fontSize: "10px",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Circle Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
				<div className="rating-stars block">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="no-value"
          size="large"
          value={3}
          max={10}
          icon={<CircleIcon fontSize="inherit" />}
          emptyIcon={<CircleIcon fontSize="inherit" />}
        />
      </Box>
    </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Rounded Star Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
				<Stack spacing={1} className="rating-stars  block my-rating-4">
      <Rating
        name="half-rating"
        value={3}
        precision={0.5}
        size="large"
        icon={<StarsIcon fontSize="inherit" />}
        emptyIcon={<StarsIcon fontSize="inherit" />}
      />
    </Stack>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">

      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Heart rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-example-movie">
              <div className="box-body  text-center fs-30">
			  <div>
      <StyledRating
        defaultValue={3}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Circle rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
				<ReactRating initialRating={2} onChange={(e) => {}} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Rating precision</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-example-pill">
              <div className="box-body text-center">
			  <Rating name="customized-10" defaultValue={2} max={10} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Thumbs-up Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
				<StyledRating1
      defaultValue={3}
      // precision={0.5}
      icon={<ThumbUpIcon fontSize="inherit" />}
      emptyIcon={<ThumbUpIcon fontSize="inherit" />}
    />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Row>

    {/* <!-- End Row --> */}
    </>
  )
}
Ratings.layout = "Contentlayout"

export default Ratings