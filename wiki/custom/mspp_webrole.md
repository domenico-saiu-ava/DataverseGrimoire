---
logical: "mspp_webrole"
display: "Ruolo Web"
entitySetName: "mspp_webroles"
primaryId: "mspp_webroleid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo Web

Imposta il ruolo utente per il portale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webrole` |
| Display name | Ruolo Web |
| Display (plural) | Ruoli Web |
| Schema name | `mspp_webrole` |
| Entity set (Web API) | `mspp_webroles` |
| Primary id attribute | `mspp_webroleid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webroles?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webroles(<guid>)
POST /api/data/v9.2/mspp_webroles
PATCH /api/data/v9.2/mspp_webroles(<guid>)
DELETE /api/data/v9.2/mspp_webroles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **0**

### Writable

`mspp_anonymoususersrole`, `mspp_authenticatedusersrole`, `mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_key`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_webroleid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_webrole_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webrole_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_webrole` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |


### Many-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermissionprofile_webrole` | [mspp_columnpermissionprofile](mspp_columnpermissionprofile.md) | _n/a_ | `mspp_columnpermissionprofile_webrole` |
| `mspp_entitypermission_webrole` | [mspp_entitypermission](mspp_entitypermission.md) | _n/a_ | `mspp_entitypermission_webrole` |
| `mspp_publishingstatetransitionrule_webrole` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | _n/a_ | `mspp_publishingstatetransitionrule_webrole` |
| `mspp_webpageaccesscontrolrule_webrole` | [mspp_webpageaccesscontrolrule](mspp_webpageaccesscontrolrule.md) | _n/a_ | `mspp_webpageaccesscontrolrule_webrole` |
| `mspp_websiteaccess_webrole` | [mspp_websiteaccess](mspp_websiteaccess.md) | _n/a_ | `mspp_websiteaccess_webrole` |

## Source

Generated from [mspp_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webrole')) on 2026-05-07.