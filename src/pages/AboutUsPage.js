import { Container, Box, Heading, Text, Image, Center } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <>
      <Container maxW="container.lg" px={5} py={20} h="100vh">
        <Heading style={{ color: "#df1674", textAlign: "left" }} py={4}>
          About Us
        </Heading>
        <Heading size="md" py={5}>
          OCAD Artist Alley is a dynamic showcase of student works, that links
          to self-run online stores. Visitors can explore what the students and
          alumni of OCADU have to offer.
        </Heading>
        <Text>
          Established in September 2018, OCAD Artist Alley (OAA) is a
          Toronto-based event that has supported students and alumnus of Ontario
          College of Art and Design University. This bi-annual pop-up market
          features students and alumni from all programs, allowing them to
          exhibit and sell their work. It is a way for us to encourage OCAD U
          students as artists and small businesses. We are ultimately made up of
          student and alumni volunteers who dedicate their time to help make
          these events and opportunities happen. The OAA aims to support and
          inspire creatives by providing a platform to sell, network, and build
          confidence within their community!
        </Text>
        <Center py={5}>
          <Image src="https://64.media.tumblr.com/bb502ae1d34857cca2e6d5add7b3ab91/tumblr_inline_qz5su67h6d1xo64ct_500.jpg" />
        </Center>
        <Text>
          Our events have been widely popular in the past. This virtual online
          market will definitely be different from our past physical artist
          events. However, our mandate and goals will remain the same: to
          provide a risk-free opportunity for OCAD U students and alumni. We are
          dedicated to providing accessible opportunities for students to
          further their careers and gain valuable first-hand experience. In the
          past, our vendors have found gallery opportunities, employment, and
          media coverage through our event.
        </Text>
        <Center py={5}>
          <Image src="https://64.media.tumblr.com/88c33c8b7c0a5046a50cff4df673d69a/tumblr_inline_qgmsgqjv7I1xo64ct_500.jpg" />
        </Center>
        <Text>
          Overall, we aim to create a safe space. We prioritize applicants who
          have not tabled before and take the program, year, and marginalized
          applicants into consideration as we want to showcase talent from all
          corners of OCAD U.
        </Text>
        <Center py={5}>
          <Image src="https://64.media.tumblr.com/d614210bff7510bf3913cc416988b117/tumblr_inline_qz5svhkE5T1xo64ct_500.png" />
        </Center>
      </Container>
    </>
  );
};

export default AboutUsPage;
