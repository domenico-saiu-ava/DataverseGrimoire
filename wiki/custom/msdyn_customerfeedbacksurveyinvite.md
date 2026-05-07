---
logical: "msdyn_customerfeedbacksurveyinvite"
display: "Invito sondaggio feedback cliente"
entitySetName: "msdyn_customerfeedbacksurveyinvites"
primaryId: "msdyn_customerfeedbacksurveyinviteid"
primaryName: "msdyn_customerfeedbacksurveyurl"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Invito sondaggio feedback cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurveyinvite` |
| Display name | Invito sondaggio feedback cliente |
| Display (plural) | Invito sondaggi feedback cliente |
| Schema name | `msdyn_customerfeedbacksurveyinvite` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveyinvites` |
| Primary id attribute | `msdyn_customerfeedbacksurveyinviteid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyurl` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveyinvites?$select=msdyn_customerfeedbacksurveyurl&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveyinvites
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveyinvites(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customerfeedbacksurveyid`, `msdyn_customerfeedbacksurveyinviteid`, `msdyn_customerfeedbacksurveyurl`, `msdyn_inviteemailaddress`, `msdyn_inviteexpirationdate`, `msdyn_invitestatus`, `msdyn_otherproperties`, `msdyn_regardingobjectid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerfeedbacksurveyinvite_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurveyinvite_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurveyinvite_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurveyinvite_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_customerfeedbacksurveyinvite` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyinvite` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerfeedbacksurveyinvite_SyncErrors` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_DuplicateMatchingRecord` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_DuplicateBaseRecord` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `baserecordid` | `baserecordid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_AsyncOperations` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_MailboxTrackingFolders` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_UserEntityInstanceDatas` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `objectid` | `objectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_ProcessSession` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_BulkDeleteFailures` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_PrincipalObjectAttributeAccesses` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `objectid` | `objectid_msdyn_customerfeedbacksurveyinvite` |
| `msdyn_customerfeedbacksurveyinvite_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurveyinvite](msdyn_customerfeedbacksurveyinvite.md) | `msdyn_customerfeedbacksurveyinviteid` | `msdyn_customerfeedbacksurveyinviteid` |


## Source

Generated from [msdyn_customerfeedbacksurveyinvite (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerfeedbacksurveyinvite')) on 2026-05-07.