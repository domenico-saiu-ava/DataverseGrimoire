---
logical: "adx_webformsession"
display: "Sessione del modulo con più passaggi"
entitySetName: "adx_webformsessions"
primaryId: "adx_webformsessionid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione del modulo con più passaggi

Serve come meccanismo per registrare l'occorrenza di un'immissione incompleta nel modulo con più passaggi per un determinato utente in modo che possa tornare indietro e completarlo in seguito.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_webformsession` |
| Display name | Sessione del modulo con più passaggi |
| Display (plural) | Sessioni modulo con più passaggi |
| Schema name | `adx_webformsession` |
| Entity set (Web API) | `adx_webformsessions` |
| Primary id attribute | `adx_webformsessionid` |
| Primary name attribute | `adx_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_webformsessions?$select=adx_name&$top=10
GET /api/data/v9.2/adx_webformsessions(<guid>)
POST /api/data/v9.2/adx_webformsessions
PATCH /api/data/v9.2/adx_webformsessions(<guid>)
DELETE /api/data/v9.2/adx_webformsessions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`adx_anonymousidentification`, `adx_contact`, `adx_currentstepindex`, `adx_name`, `adx_primaryrecordentitykeyname`, `adx_primaryrecordentitylogicalname`, `adx_primaryrecordid`, `adx_stephistory`, `adx_systemuser`, `adx_userhostaddress`, `adx_useridentityname`, `adx_webformsessionid`, `importsequencenumber`, `mspp_webformid`, `mspp_webformstepid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_adx_webformsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_webformsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_webformsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_webformsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_adx_webformsession` | [organization](organization.md) | `organizationid` | `organizationid` |
| `adx_webformsession_contact` | [contact](contact.md) | `adx_contact` | `adx_contact` |
| `adx_webformsession_systemuser` | [systemuser](systemuser.md) | `adx_systemuser` | `adx_systemuser` |
| `powerpagecomponent_mspp_webformid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformid` | `mspp_webformid` |
| `powerpagecomponent_mspp_webformstepid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformstepid` | `mspp_webformstepid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_webformsession_SyncErrors` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `adx_webformsession_AsyncOperations` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `adx_webformsession_MailboxTrackingFolders` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `adx_webformsession_UserEntityInstanceDatas` | [adx_webformsession](adx_webformsession.md) | `objectid` | `objectid_adx_webformsession` |
| `adx_webformsession_ProcessSession` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `adx_webformsession_BulkDeleteFailures` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `adx_webformsession_PrincipalObjectAttributeAccesses` | [adx_webformsession](adx_webformsession.md) | `objectid` | `objectid_adx_webformsession` |


## Source

Generated from [adx_webformsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_webformsession')) on 2026-05-07.