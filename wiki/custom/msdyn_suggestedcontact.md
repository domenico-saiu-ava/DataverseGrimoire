---
logical: "msdyn_suggestedcontact"
display: "Contatto suggerito"
entitySetName: "msdyn_suggestedcontacts"
primaryId: "msdyn_suggestedcontactid"
primaryName: "msdyn_fullname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contatto suggerito

Contact suggestions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedcontact` |
| Display name | Contatto suggerito |
| Display (plural) | Contact Suggestions |
| Schema name | `msdyn_suggestedcontact` |
| Entity set (Web API) | `msdyn_suggestedcontacts` |
| Primary id attribute | `msdyn_suggestedcontactid` |
| Primary name attribute | `msdyn_fullname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestedcontacts?$select=msdyn_fullname&$top=10
GET /api/data/v9.2/msdyn_suggestedcontacts(<guid>)
POST /api/data/v9.2/msdyn_suggestedcontacts
PATCH /api/data/v9.2/msdyn_suggestedcontacts(<guid>)
DELETE /api/data/v9.2/msdyn_suggestedcontacts(<guid>)
```

## Attributes

Writable: **19** · Read-only: **0**

### Writable

`msdyn_accountid`, `msdyn_accountidname`, `msdyn_accountname`, `msdyn_addresscity`, `msdyn_addressline1`, `msdyn_addressline2`, `msdyn_addresspostalcode`, `msdyn_companyname`, `msdyn_createdon`, `msdyn_description`, `msdyn_email`, `msdyn_firstname`, `msdyn_fullname`, `msdyn_jobtitle`, `msdyn_lastname`, `msdyn_mobilephone`, `msdyn_preferredcontactmethodcode`, `msdyn_suggestedcontactid`, `msdyn_telephone`

## Relationships




## Source

Generated from [msdyn_suggestedcontact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestedcontact')) on 2026-05-07.