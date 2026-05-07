---
logical: "msdyn_conversationsummaryinteraction"
display: "Interazione riepilogo della conversazione"
entitySetName: "msdyn_conversationsummaryinteractions"
primaryId: "msdyn_conversationsummaryinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Interazione riepilogo della conversazione

Entità interazione riepilogo della conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsummaryinteraction` |
| Display name | Interazione riepilogo della conversazione |
| Display (plural) | Interazioni riepilogo della conversazione |
| Schema name | `msdyn_conversationsummaryinteraction` |
| Entity set (Web API) | `msdyn_conversationsummaryinteractions` |
| Primary id attribute | `msdyn_conversationsummaryinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsummaryinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
POST /api/data/v9.2/msdyn_conversationsummaryinteractions
PATCH /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsummaryinteractions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_conversationsummaryinteractionid`, `msdyn_feedbackverbatim`, `msdyn_helpful`, `msdyn_interactioncontext`, `msdyn_issuefeedbackverbatim`, `msdyn_issueinaccurate`, `msdyn_name`, `msdyn_resolutionfeedbackverbatim`, `msdyn_resolutioninaccurate`, `msdyn_summary`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationsummaryinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummaryinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummaryinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummaryinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationsummaryinteraction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummaryinteraction_SyncErrors` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_AsyncOperations` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_MailboxTrackingFolders` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_UserEntityInstanceDatas` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `objectid` | `objectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_ProcessSession` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_BulkDeleteFailures` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummaryinteraction` |
| `msdyn_conversationsummaryinteraction_PrincipalObjectAttributeAccesses` | [msdyn_conversationsummaryinteraction](msdyn_conversationsummaryinteraction.md) | `objectid` | `objectid_msdyn_conversationsummaryinteraction` |


## Source

Generated from [msdyn_conversationsummaryinteraction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsummaryinteraction')) on 2026-05-07.