create database finance;

use finance;

CREATE TABLE account_type  (
  acctyp_id int NOT NULL AUTO_INCREMENT,
  acctyp_name varchar(150) NOT NULL,
  acctyp_description varchar(255) NOT NULL,
  acctyp_nature char(1) NOT NULL,
  acctyp_creation datetime NOT NULL,
  acctyp_status smallint NOT NULL,
  PRIMARY KEY (acctyp_id)
);

CREATE TABLE accounts  (
  acc_id int NOT NULL AUTO_INCREMENT,
  acc_name varchar(150) NOT NULL,
  acc_creation datetime NOT NULL,
  acc_status smallint NOT NULL,
  PRIMARY KEY (acc_id)
);

CREATE TABLE budget  (
  bud_id int NOT NULL AUTO_INCREMENT,
  bud_chaacc_id int NOT NULL,
  bud_acc_id int NOT NULL,
  bud_budgrp_id int NOT NULL,
  bud_description varchar(150) NOT NULL,
  bud_value decimal(15, 2) NOT NULL,
  bud_day smallint NOT NULL,
  bud_status smallint NOT NULL,
  bud_creation datetime NOT NULL,
  PRIMARY KEY (bud_id)
);

CREATE TABLE budget_group  (
  budgrp_id int NOT NULL AUTO_INCREMENT,
  budgrp_name varchar(150) NOT NULL,
  budgrp_status smallint NOT NULL,
  budgrp_creation datetime NOT NULL,
  PRIMARY KEY (budgrp_id)
);

CREATE TABLE chart_of_accounts  (
  chaacc_id int NOT NULL AUTO_INCREMENT,
  chaacc_acctyp_id int NOT NULL,
  chaacc_name varchar(155) NOT NULL,
  PRIMARY KEY (chaacc_id)
);

CREATE TABLE ledger_entries  (
  ledent_id int NOT NULL AUTO_INCREMENT,
  ledent_chaacc_id int NOT NULL,
  ledent_acc_id int NOT NULL,
  ledent_description varchar(150) NOT NULL,
  ledent_value decimal(20, 2) NOT NULL,
  ledent_status smallint NOT NULL,
  ledent_creation datetime NOT NULL,
  PRIMARY KEY (ledent_id)
);

ALTER TABLE budget ADD CONSTRAINT fk_budget_of_accounts_001 FOREIGN KEY (bud_acc_id) REFERENCES accounts(acc_id);
ALTER TABLE budget ADD CONSTRAINT fk_budget_of_budget_group_002 FOREIGN KEY (bud_budgrp_id) REFERENCES budget_group(budgrp_id);
ALTER TABLE budget ADD CONSTRAINT fk_budget_of_chart_of_accounts_003 FOREIGN KEY (bud_chaacc_id) REFERENCES chart_of_accounts(chaacc_id);

ALTER TABLE chart_of_accounts ADD CONSTRAINT fk_chart_of_accounts_of_account_type_001 FOREIGN KEY (chaacc_acctyp_id) REFERENCES account_type(acctyp_id);

ALTER TABLE ledger_entries ADD CONSTRAINT fk_ledger_entries_of_chart_of_accounts_001 FOREIGN KEY (ledent_chaacc_id) REFERENCES chart_of_accounts(chaacc_id);
ALTER TABLE ledger_entries ADD CONSTRAINT fk_ledger_entries_of_accounts_002 FOREIGN KEY (ledent_acc_id) REFERENCES accounts(acc_id);
