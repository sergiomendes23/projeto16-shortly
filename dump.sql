--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: url; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.url (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: url_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.url_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: url_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.url_id_seq OWNED BY public.url.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: url id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url ALTER COLUMN id SET DEFAULT nextval('public.url_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: url; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.url VALUES (1, 'https://www.youtube.com/watch?v=hxxcEzM8r-4', 'oP6IFI89K-LPU_VtOLO6Y', 3, 9, '2022-10-15 18:49:59.827842');
INSERT INTO public.url VALUES (3, 'https://pbs.twimg.com/profile_images/1559199864252235778/pfpNxwlH_400x400.jpg', '-wi47CIZuKjcCSjlS174s', 2, 11, '2022-10-16 12:51:29.471957');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', 'driven', '2022-10-13 19:54:44.664827');
INSERT INTO public.users VALUES (2, 'sergio', 'sergio@driven.com.br', 'driven', '2022-10-13 20:10:17.140467');
INSERT INTO public.users VALUES (3, 'lele', 'lele@driven.com.br', '$2b$10$v2pbtqCDQIwG.NM9z0VryuxUNU/myHmu06aFihp8fwuTHBijIqak.', '2022-10-13 20:13:21.28197');
INSERT INTO public.users VALUES (4, 'bibi', 'bibi@driven.com.br', '$2b$10$MXwLX6SETumFQRSfusAW2OZhg.KWM4gFtqLkxLBcGgDsrIvv8d2NW', '2022-10-13 20:13:47.476342');
INSERT INTO public.users VALUES (7, 'pipipi', 'pipipi@driven.com', '$2b$10$Kj8d010AQkIO4lCI9g72t.JUjendJSTisrkF/O.fvqQqVD22pT5M6', '2022-10-15 11:40:32.126174');
INSERT INTO public.users VALUES (8, 'oieee', 'oieee@driven.com', '$2b$10$I34BZ2kaPz51spIT2CK9S.EJ1EKWz.T83cZ/EHcptThniYz4sCwgK', '2022-10-15 14:02:20.664677');
INSERT INTO public.users VALUES (9, 'novo', 'novo@driven.com', '$2b$10$IqyXzaLuAjyCmD2.ScqOS.3M7ExEiClgMjzDX99bxG6py0dJRYhdC', '2022-10-15 18:21:41.908508');
INSERT INTO public.users VALUES (10, 'maisum', 'maisum@driven.com', '$2b$10$dAItnX9.3nR37ocLTqhJBuJH6q8n7GeuZ8soqEaH4Qf/fVq3jeSka', '2022-10-15 19:48:14.348354');
INSERT INTO public.users VALUES (11, 'botafogo', 'botafogo@driven.com', '$2b$10$HUTz09l2Z4FR22B8MCbIDO4DRrFmVriz1i4rCBbzBD9aXkGkDLB/S', '2022-10-16 12:50:03.146076');
INSERT INTO public.users VALUES (12, 'testefinal', 'testefinal@driven.com', '$2b$10$zkuJirjrWEGrClX6EOJUGuXZ4lSZki2cfz/84vDrvgs3Mu9Pgxgzi', '2022-10-17 10:36:37.669886');
INSERT INTO public.users VALUES (13, 'pipipipopopo', 'pipipipopopo@driven.com', '$2b$10$1o8xcNJV8CZWUazKCrtneuzJ3hkVrIwdGPapo2bsFHGPBaQ5XEFbW', '2022-10-17 10:48:29.625709');


--
-- Name: url_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.url_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- Name: url url_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url
    ADD CONSTRAINT url_pkey PRIMARY KEY (id);


--
-- Name: url url_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url
    ADD CONSTRAINT "url_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: url url_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url
    ADD CONSTRAINT "url_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

