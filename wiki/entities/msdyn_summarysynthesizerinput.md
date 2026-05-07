---
logical: "msdyn_summarysynthesizerinput"
display: "Summary Synthesizer Input"
entitySetName: "msdyn_summarysynthesizerinputs"
primaryId: "msdyn_summarysynthesizerinputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Summary Synthesizer Input

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizerinput` |
| Display name | Summary Synthesizer Input |
| Display (plural) | Summary Synthesizer Inputs |
| Schema name | `msdyn_summarysynthesizerinput` |
| Entity set (Web API) | `msdyn_summarysynthesizerinputs` |
| Primary id attribute | `msdyn_summarysynthesizerinputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizerinputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizerinputs
PATCH /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizerinputs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentname`, `msdyn_componentresult`, `msdyn_Name`, `msdyn_referenceobjectid`, `msdyn_referenceobjectidIdType`, `msdyn_summarysynthesizerinputId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_summarysynthesizerinput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_summarysynthesizerinput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizerinput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizerinput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizerinput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_summarysynthesizerinput_referenceobjectid_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_summarysynthesizerinput_referenceobjectid_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `owner_msdyn_summarysynthesizerinput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_summarysynthesizerinput` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_summarysynthesizerinput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizerinput_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizerinput_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_summarysynthesizerinput.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_summarysynthesizerinput.md) on 2026-05-06.