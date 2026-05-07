# Mapping JSON Interview → Dataverse

## Mapping campo per campo

| Campo JSON | Entità | Attributo Dataverse |
|---|---|---|
| `interviewId` | `cai_genericcontact` | `activityid` |
| `eventId` | `cai_leadoutcomeactivitycssession` | `cai_leadoutcomeactivitycssessionid` |
| `userId` | `cai_genericcontact` → `systemuser` | `_cai_managerid_value` |
| `ndg` | `account` / `contact` (via `regardingobjectid`) | `accountnumber` *(da verificare — campo NDG non trovato esplicitamente nel wiki)* |
| `status` | `cai_genericcontact` | `statuscode` |
| `meetingSubject` | `cai_genericcontact` | `subject` |
| `meetingDate` | `cai_genericcontact` | `cai_contactdate` |
| `contactTypeCode` | `cai_contactchannel` (via `cai_contactchannelid`) | `cai_contactchannelcode` |
| `notes` | `cai_genericcontact` | `cai_notes` |
| `nominative` | `account.name` / `contact.fullname` (via `regardingobjectid`) | — |
| `relatedManagers[].employeeId` | `systemuser` | `employeeid` |
| `relatedManagers[].roleMoDI` | `cai_modirole` (via `systemuser.cai_modiroleid`) | `cai_name` |
| `relatedManagers[].name` | `systemuser` | `fullname` |
| `discussedTopics` | `cai_leadoutcomegoal` → `cai_marketinggoal` *(da verificare)* | — |

---

## Query Web API

### 1. Dati principali + canale + cliente

Copre: `interviewId`, `meetingSubject`, `meetingDate`, `status`, `notes`, `contactTypeCode`, `nominative`, `ndg`.

```http
GET /api/data/v9.2/cai_genericcontacts(<activityid>)
  ?$select=activityid,subject,cai_contactdate,statuscode,cai_notes,
           _cai_managerid_value,_regardingobjectid_value
  &$expand=
    cai_contactchannelid_cai_genericcontact($select=cai_contactchannelcode),
    regardingobjectid_account($select=name,accountnumber),
    regardingobjectid_contact($select=fullname)
```

---

### 2. eventId — sessione di esitazione

```http
GET /api/data/v9.2/cai_leadoutcomeactivitycssessions
  ?$filter=_cai_genericcontactid_value eq <activityid>
  &$select=cai_leadoutcomeactivitycssessionid
```

---

### 3. relatedManagers — gestori coinvolti

```http
GET /api/data/v9.2/cai_leadoutcomeactivities
  ?$filter=_cai_genericcontactid_value eq <activityid>
  &$select=_cai_managerid_value
  &$expand=cai_managerid(
    $select=fullname,employeeid,_cai_modiroleid_value;
    $expand=cai_modiroleid($select=cai_name)
  )
```

- `employeeId` ← `systemuser.employeeid`
- `roleMoDI` ← `cai_modirole.cai_name`
- `name` ← `systemuser.fullname`

---

### 4. discussedTopics *(da verificare)*

La catena più probabile è `cai_leadoutcomegoal` → `cai_marketinggoal`:

```http
GET /api/data/v9.2/cai_leadoutcomegoals
  ?$filter=_cai_leadoutcomeid_value eq <leadoutcomeid>
  &$select=cai_leadoutcomegoalid,cai_name,_cai_marketinggoalid_value
  &$expand=cai_marketinggoalid($select=cai_name,cai_code)
```

> **Nota:** `productCategory` e `note` per singolo argomento non sono stati trovati esplicitamente nel wiki.
> Possibile alternativa: `cai_leadoutcomeactivitycssessionlead.cai_annotation`.
> Verificare su **Maker Portal** (https://make.powerapps.com) → Tabelle → `cai_leadoutcomegoal` → Colonne.
