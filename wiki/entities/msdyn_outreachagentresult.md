---
logical: "msdyn_outreachagentresult"
display: "Outreach Agent Result"
entitySetName: "msdyn_outreachagentresults"
primaryId: "msdyn_outreachagentresultid"
primaryName: "msdyn_leadid"
tableType: "Standard"
ownership: "UserOwned"
---

# Outreach Agent Result

Entity to save outreach agent email response

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_outreachagentresult` |
| Display name | Outreach Agent Result |
| Display (plural) | Outreach Agent Results |
| Schema name | `msdyn_outreachagentresult` |
| Entity set (Web API) | `msdyn_outreachagentresults` |
| Primary id attribute | `msdyn_outreachagentresultid` |
| Primary name attribute | `msdyn_leadid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_outreachagentresults?$select=msdyn_leadid&$top=10
GET /api/data/v9.2/msdyn_outreachagentresults(<guid>)
POST /api/data/v9.2/msdyn_outreachagentresults
PATCH /api/data/v9.2/msdyn_outreachagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_outreachagentresults(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_emailresponse`, `msdyn_leadId`, `msdyn_outreachagentresultId`, `msdyn_salesAgentRunId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_outreachagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_outreachagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_outreachagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_outreachagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_outreachagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_outreachagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_outreachagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_outreachagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_outreachagentresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachagentresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachagentresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_outreachagentresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_outreachagentresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachagentresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_outreachagentresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_outreachagentresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_outreachagentresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_outreachagentresult.md) on 2026-05-06.