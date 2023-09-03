import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  ListItem,
  OrderedList,
  Select,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const MainForm = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [userRegistrationData, setUserRegistrationData] = useState({
    email: "",
    fullName: "",
    age: "",
    highestEdu: "",
    institute: "",
    study: "",
    workExp: "",
    canadaInstitute: "",
    canadaProgram: "",
    applyingCountry: "",
    futureGoals: "",
    listeningScores: "",
    readingScores: "",
    speakingScores: "",
    writingScores: "",
    paidTuitionFee: "",
    tuitionFee: "",
    gic: "",
    payGIC: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistrationData({ ...userRegistrationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(userRegistrationData);

    let [response] = await Promise.all([
      // fetch("https://motionless-duck-jodhpurs.cyclic.app/api/userData", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify(userRegistrationData),
      // }),
      fetch("https://motionless-duck-jodhpurs.cyclic.app/api/mailUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistrationData),
      }),
    ]);
    setLoading(false);
    toast({
      title: "You have successfully submitted the form...",
      description: "Expect a mail from us.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    const data = await response.json();
    console.log(data.message);
  };

  const handleReset = () => {
    setUserRegistrationData({
      email: "",
      fullName: "",
      age: "",
      highestEdu: "",
      institute: "",
      study: "",
      workExp: "",
      canadaInstitute: "",
      canadaProgram: "",
      applyingCountry: "",
      futureGoals: "",
      listeningScores: "",
      readingScores: "",
      speakingScores: "",
      writingScores: "",
      paidTuitionFee: "",
      tuitionFee: "",
      gic: "",
      payGIC: "",
    });
  };

  return (
    <Box
      background="linear-gradient(#DAF1FE, skyblue, aqua)"
      align={"center"}
      overflowY={"hidden"}
      px={{ md: "15" }}
    >
      <Link href="https://effizient.ca/">
        <Image src="/logo.png" w={{ base: "350px", md: "450px" }} />
      </Link>
      <Box
        background={"white"}
        textAlign={"left"}
        m="5"
        p="5"
        w={{ md: "60%" }}
        borderRadius={"10px"}
        border="1px solid #ddd"
        boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      >
        <Heading fontWeight={500}> Customized SOP Generator</Heading>
        <Text my="5">
          Fill this questionnaire for the student. After submitting, you will
          receive an email at the email address that you have provided with a
          Statement of Purpose customized for you. You can use and modify that
          as per your needs.
        </Text>
        <Text>
          If you would like to get it edited, reviewed, or drafted by our
          experts, you can get in touch with us :
          <Link
            color="blue"
            href="https://effizient-immigration-inc.square.site/s/shop"
          >
            Click Here !
          </Link>
        </Text>
      </Box>

      <Box as="form" onSubmit={handleSubmit}>
        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              value={userRegistrationData.email}
              onChange={handleInput}
              name="email"
              placeholder="Enter email"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              value={userRegistrationData.fullName}
              onChange={handleInput}
              name="fullName"
              placeholder="Your name"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="contact">Age</FormLabel>
            <Input
              type="number"
              value={userRegistrationData.age}
              onChange={handleInput}
              name="age"
              placeholder="Your age"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="highestEdu">
              Highest Level of Education
            </FormLabel>
            <Select
              onChange={handleInput}
              value={userRegistrationData.highestEdu}
              name="highestEdu"
              id="highestEdu"
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="Grade 12">Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors Degree">Bachelors Degree</option>
              <option value="Masters Degree">Masters Degree</option>
              <option value="PhD">PhD</option>
            </Select>
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="institute">
              Institute where you completed your highest level of education
            </FormLabel>
            <Input
              value={userRegistrationData.institute}
              onChange={handleInput}
              name="institute"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="study">What did you study</FormLabel>
            <Input
              value={userRegistrationData.study}
              onChange={handleInput}
              name="study"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="workExp">
              Do you have any relevant work experience?
            </FormLabel>
            <Text>
              Write None if no work experience. Provide the following details if
              yes:
            </Text>

            <OrderedList ml="10">
              <ListItem>Job Title</ListItem>
              <ListItem>Company Name</ListItem>
              <ListItem>Job Duties</ListItem>
            </OrderedList>
            <Text mb="3">
              Sample Answer: I worked as a Sales Manager at Effizient
              Immigration Inc from Jan 2022 till Feb 2023. In this role, I
              managed sales operations, reaching out to leads, lead the outreach
              program, ensured meeting monthly targets.
            </Text>
            <Textarea
              value={userRegistrationData.workExp}
              onChange={handleInput}
              name="workExp"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="canadaInstitute">
              What institute did you get admitted to in Canada?
            </FormLabel>
            <Input
              value={userRegistrationData.canadaInstitute}
              onChange={handleInput}
              name="canadaInstitute"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="canadaProgram">
              What is your program of study in Canada?
            </FormLabel>
            <Input
              value={userRegistrationData.canadaProgram}
              onChange={handleInput}
              name="canadaProgram"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="applyingCountry">
              Which country are you applying from?
            </FormLabel>
            <Input
              value={userRegistrationData.applyingCountry}
              onChange={handleInput}
              name="applyingCountry"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            {" "}
            <FormLabel htmlFor="futureGoals">
              What are your future goals?
            </FormLabel>
            <Input
              value={userRegistrationData.futureGoals}
              onChange={handleInput}
              name="futureGoals"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="listeningScores">
              English Scores - Listening
            </FormLabel>
            <Input
              value={userRegistrationData.listeningScores}
              onChange={handleInput}
              name="listeningScores"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="readingScores">
              English Scores - Reading
            </FormLabel>
            <Input
              value={userRegistrationData.readingScores}
              onChange={handleInput}
              name="readingScores"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            {" "}
            <FormLabel htmlFor="speakingScores">
              English Scores - Speaking
            </FormLabel>
            <Input
              value={userRegistrationData.speakingScores}
              onChange={handleInput}
              name="speakingScores"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="writingScores">
              English Scores - Writing
            </FormLabel>
            <Input
              value={userRegistrationData.writingScores}
              onChange={handleInput}
              name="writingScores"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel>Did you pay your first year tuition?</FormLabel>
            <Stack>
              <Flex align={"center"} gap="3">
                <label
                  htmlFor="yes"
                  value={userRegistrationData.paidTuitionFee}
                  onChange={handleInput}
                >
                  Yes {"  "}
                  <input
                    type="radio"
                    name="paidTuitionFee"
                    value="yes"
                    required
                  />
                </label>
              </Flex>
              <Flex align={"center"} gap="3">
                <label
                  htmlFor="no"
                  value={userRegistrationData.paidTuitionFee}
                  onChange={handleInput}
                >
                  No {"  "}
                  <input type="radio" name="paidTuitionFee" value="no" />
                </label>
              </Flex>
            </Stack>
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            {" "}
            <FormLabel htmlFor="tuitionFee">
              How much tuition fee did you pay?
            </FormLabel>
            <Input
              value={userRegistrationData.tuitionFee}
              onChange={handleInput}
              name="tuitionFee"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel>Did you do a GIC?</FormLabel>
            <Stack>
              <Flex>
                <label
                  htmlFor="yes"
                  value={userRegistrationData.gic}
                  onChange={handleInput}
                >
                  Yes{"  "}
                  <input
                    type="radio"
                    id="yes"
                    name="gic"
                    value="yes"
                    required
                  />
                </label>
              </Flex>
              <Flex>
                <label
                  htmlFor="no"
                  value={userRegistrationData.gic}
                  onChange={handleInput}
                >
                  No{"  "}
                  <input type="radio" id="no" name="gic" value="no" />
                </label>
              </Flex>
            </Stack>
          </FormControl>
        </Box>

        <Box
          background={"white"}
          textAlign={"left"}
          m="5"
          p="5"
          w={{ md: "60%" }}
          borderRadius={"10px"}
          border="1px solid #ddd"
          boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="payGIC">
              How much did you pay towards GIC
            </FormLabel>
            <Input
              value={userRegistrationData.payGIC}
              onChange={handleInput}
              name="payGIC"
              placeholder="Your answer"
            />
          </FormControl>
        </Box>

        <Flex m="5" p="5" align={"center"} justifyContent={"space-evenly"}>
          <Button
            type="submit"
            borderRadius={"10px"}
            border="1px solid #ddd"
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            colorScheme="blue"
            w={{ md: "20%" }}
          >
            {loading ? <Spinner /> : "Submit"}
          </Button>
          <Button
            type="reset"
            onClick={handleReset}
            borderRadius={"10px"}
            border="1px solid #ddd"
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            variant="outline"
            colorScheme="red"
            bg="white"
            w={{ md: "20%" }}
          >
            Clear Form
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainForm;
