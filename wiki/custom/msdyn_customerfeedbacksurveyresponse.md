---
logical: "msdyn_customerfeedbacksurveyresponse"
display: "Risposta sondaggio feedback cliente"
entitySetName: "msdyn_customerfeedbacksurveyresponses"
primaryId: "msdyn_customerfeedbacksurveyresponseid"
primaryName: "msdyn_customerfeedbacksurveyurl"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta sondaggio feedback cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurveyresponse` |
| Display name | Risposta sondaggio feedback cliente |
| Display (plural) | Risposta sondaggi feedback cliente |
| Schema name | `msdyn_customerfeedbacksurveyresponse` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveyresponses` |
| Primary id attribute | `msdyn_customerfeedbacksurveyresponseid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyurl` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveyresponses?$select=msdyn_customerfeedbacksurveyurl&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveyresponses
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveyresponses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customerfeedbacksurveyid`, `msdyn_customerfeedbacksurveyinviteid`, `msdyn_customerfeedbacksurveyresponseid`, `msdyn_customerfeedbacksurveyurl`, `msdyn_otherproperties`, `msdyn_regardingobjectid`, `msdyn_response`, `msdyn_response_raw`, `msdyn_satisfactionmetricvalue`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerfeedbacksurveyresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurveyresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurveyresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurveyresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_customerfeedbacksurveyresponse` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |
| `msdyn_customerfeedbacksurveyinvite_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `msdyn_customerfeedbacksurveyinviteid` | `msdyn_customerfeedbacksurveyinviteid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerfeedbacksurveyresponse_SyncErrors` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_DuplicateMatchingRecord` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_DuplicateBaseRecord` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `baserecordid` | `baserecordid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_AsyncOperations` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_MailboxTrackingFolders` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_UserEntityInstanceDatas` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `objectid` | `objectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_ProcessSession` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_BulkDeleteFailures` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyresponse` |
| `msdyn_customerfeedbacksurveyresponse_PrincipalObjectAttributeAccesses` | [msdyn_customerfeedbacksurveyresponse](msdyn_customerfeedbacksurveyresponse.md) | `objectid` | `objectid_msdyn_customerfeedbacksurveyresponse` |


## Source

Generated from [msdyn_customerfeedbacksurveyresponse (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerfeedbacksurveyresponse')) on 2026-05-07.